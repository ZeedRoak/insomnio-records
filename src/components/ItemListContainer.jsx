import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import LoaderComponent from "./LoaderComponent";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../service/firebase";
import HomeCarousel from "./HomeCarousel";
import "../css/ItemListContainer.css"

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { type } = useParams();

  useEffect(() => {
    setLoading(true);

    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const productosFiltrados = type
          ? list.filter((prod) => prod.categoria === type)
          : list;

        setData(productosFiltrados);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }, [type]);

 return (
  <main className="item-list-container">

    {!type && <HomeCarousel />}

    {!type && (
      <section className="home-intro">
        <h1>Disquería Insomnio</h1>
        <p>
          [La musica no duerme. Nosotros tampoco.]
        </p>
      </section>
    )}

    {loading ? (
      <LoaderComponent text="Cargando productos..." />
    ) : (
      <ItemList data={data} />
    )}

  </main>
);}

export default ItemListContainer;