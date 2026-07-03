import { Link } from "react-router-dom";
import { FaRecordVinyl } from "react-icons/fa";
import "../css/EmptyCart.css";

const EmptyCart = () => {
  return (
    <main className="empty-cart">
      <FaRecordVinyl className="empty-icon" />

      <h1>Tu carrito está vacío</h1>

      <p>
        Parece que todavía no elegiste ningún disco.
        <br />
        Es un buen momento para encontrar tu próximo favorito.
      </p>

      <Link className="empty-btn" to="/">
        Explorar catálogo
      </Link>
    </main>
  );
};

export default EmptyCart;