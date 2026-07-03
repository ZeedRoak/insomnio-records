import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import Item from "./Item";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../css/ItemDetail.css";
import { BsCheckCircle } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";


const ItemDetail = ({ detail, productos=[] }) => {
  const [purchase, setPurchase] = useState(false);
  const { addItem } = useContext(CartContext);

  if (!detail) return <h2>Cargando producto...</h2>;
  

  const onAdd = (cantidad) => {
    addItem(detail, cantidad);
    setPurchase(true);
  };

  const sugeridos = productos
  .filter(
    (prod) =>
      prod.categoria === detail.categoria &&
      prod.id !== detail.id
  )
  .slice(0, 5);




return (
  <section className="detail-page">

    <div className="breadcrumb">
      <Link to="/">Home</Link>
      <span>&gt;</span>

      <Link to={`/category/${detail.type}`}>
        Productos
      </Link>
      <span>&gt;</span>

      <span>Detalle del producto</span>
      <span>&gt;</span>

      <span className="current">{detail.name}</span>
    </div>

    <div className="detail-main">
      <div className="detail-img-box">
        <img
          src={detail.img}
          alt={detail.name}
          className="detail-img"
        />
      </div>

      <div className="detail-info">
        <h1>{detail.name}</h1>
        <h4>{detail.artist}</h4>
        <p>{detail.description}</p>

        <h2 className="detail-price">${detail.price}</h2>

        <p className="detail-stock">
          <BsCheckCircle className="stock-icon" />
          Stock disponible: {detail.stock} unidades
        </p>

        {purchase ? (
          <Link className="btn-purple" to="/cart">
            <BsCart3 />
            Ir al carrito
          </Link>
        ) : (
          <ItemCount stock={detail.stock} onAdd={onAdd} />
        )}
      </div>
    </div>

    <div className="detail-extra">
      <div>
        <h3>Detalles</h3>

        <p><span>Año:</span> <strong>{detail.year}</strong></p>
        <p><span>Género:</span> <strong>{detail.genre}</strong></p>
        <p><span>Sello:</span> <strong>{detail.label}</strong></p>
        <p><span>Formato:</span> <strong>{detail.format}</strong></p>
        <p><span>Duración:</span> <strong>{detail.duration}</strong></p>
      </div>

      <div>
        <h3>Tracklist</h3>

        <ol>
          {detail.tracks?.map((track, index) => (
            <li key={index}>{track}</li>
          ))}
        </ol>
      </div>
    </div>

    <section className="related-products">
      <h2>También te puede interesar</h2>

      <div className="related-grid">
        {sugeridos.map((prod) => (
            <div className="related-card" key={prod.id}>
              <Item prod={prod} />
            </div>
       ))}
      </div>
    </section>

  </section>
  
  
);
}

export default ItemDetail;