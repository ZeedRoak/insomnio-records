import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState(null);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "items", id);
    const itemsRef = collection(db, "items");

    Promise.all([getDoc(docRef), getDocs(itemsRef)])
      .then(([res, productosSnapshot]) => {
        if (res.exists()) {
          setDetail({
            id: res.id,
            ...res.data(),
          });
        } else {
          setDetail(null);
        }

        const productosData = productosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(productosData);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading ? (
        <LoaderComponent text="Cargando detalle..." />
      ) : detail ? (
        <ItemDetail detail={detail} productos={productos} />
      ) : (
        <h2>Producto no encontrado</h2>
      )}
    </>
  );
};

export default ItemDetailContainer;