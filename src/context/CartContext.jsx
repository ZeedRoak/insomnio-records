import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + qty }
            : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: qty }]);
    }
  };

  const decreaseItem = (id) => {
  setCart(
    cart.flatMap((prod) => {
      if (prod.id !== id) return prod;

      if (prod.quantity === 1) {
        return [];
      }

      return {
        ...prod,
        quantity: prod.quantity - 1,
      };
    })
  );
};

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const total = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
  };

  const totalImp = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0) * 1.5;
  };

  const totalQty = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        decreaseItem,
        clear,
        removeItem,
        isInCart,
        total,
        totalImp,
        totalQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};