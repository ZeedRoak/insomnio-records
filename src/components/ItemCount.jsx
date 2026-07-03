import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import "../css/ItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">

      <div className="counter">
        <button onClick={restar}>
         -
        </button>

        <span>{count}</span>

        <button onClick={sumar}>
          +
        </button>
      </div>

      <button
        className="btn-purple"
        onClick={() => onAdd(count)}
        disabled={stock === 0}
      >
        <BsCart3 />
        Agregar al carrito
      </button>

    </div>
  );
};

export default ItemCount;