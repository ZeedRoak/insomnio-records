import { Link } from "react-router-dom";
import { BsX, BsDash, BsPlus } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/CartDrawer.css";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, addItem, removeItem, decreaseItem, total, totalQty } =
    useContext(CartContext);

  return (
    <aside className={`cart-drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-drawer-header">
        <h3>Tu carrito ({totalQty()})</h3>

        <button onClick={onClose} className="drawer-close">
          <BsX />
        </button>
      </div>

      <div className="cart-drawer-items">
        {cart.length === 0 ? (
          <p className="empty-cart">Tu carrito está vacío.</p>
        ) : (
          cart.map((prod) => (
            <div className="cart-drawer-item" key={prod.id}>
              <img src={prod.img} alt={prod.name} />

              <div className="drawer-item-info">
                <h4>{prod.name}</h4>
                <p>{prod.artist}</p>
                <strong>${prod.price}</strong>
              </div>

              <div className="drawer-actions">
                <button
                  className="drawer-remove"
                  onClick={() => removeItem(prod.id)}
                >
                  ×
                </button>

                <div className="drawer-counter">
                  <button onClick={() => decreaseItem(prod.id)}>
                    <BsDash />
                  </button>

                  <span>{prod.quantity}</span>

                  <button onClick={() => addItem(prod, 1)}>
                    <BsPlus />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-drawer-footer">
          <div className="drawer-total">
            <span>Total</span>
            <strong>${total()}</strong>
          </div>

          <Link to="/cart" onClick={onClose} className="drawer-cart-link">
            Ir al carrito
          </Link>

          <Link to="/" onClick={onClose} className="drawer-continue">
            Seguir comprando
          </Link>
        </div>
      )}
    </aside>
  );
};

export default CartDrawer;