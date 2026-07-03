import { LiaOpencart } from "react-icons/lia";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart, totalQty } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <LiaOpencart />
      {cart.length > 0 && <span>{totalQty()}</span>}
    </div>
  );
};

export default CartWidget;