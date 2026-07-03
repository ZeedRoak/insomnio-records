import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../css/CartView.css";

const CartView = () => {
  const { cart, clear, removeItem, total } = useContext(CartContext);

  const preConfirm = () => {
    Swal.fire({
      title: "¿Vaciar carrito?",
      text: "Se eliminarán todos los productos.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
      }
    });
  };

  return (
    <main className="cart-page">
      <h1>Tu carrito 🛒</h1>

      <section className="cart-list">
        {cart.map((compra) => (
          <article className="cart-item" key={compra.id}>
            <img src={compra.img} alt={compra.name} />

            <div className="cart-info">
              <h3>{compra.name}</h3>
              <p>Cantidad: {compra.quantity}</p>
              <p>Precio unitario: ${compra.price},00</p>
            </div>

            <div className="cart-subtotal">
              <span>${compra.quantity * compra.price},00</span>
              <button onClick={() => removeItem(compra.id)}>🗑️</button>
            </div>
          </article>
        ))}
      </section>

      <section className="cart-summary">
        <h2>Total: ${total()},00</h2>

        <div className="cart-actions">
          <button className="btn-empty" onClick={preConfirm}>
            Vaciar carrito
          </button>

          <Link className="btn-checkout" to="/checkout">
            Terminar compra
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CartView;