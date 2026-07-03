import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../service/firebase";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import { useForm } from "react-hook-form";
import "../css/Checkout.css";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);

  const { cart, total, clear } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const terminarCompra = (data) => {
    const { name, lastname, address, email } = data;

    setLoading(true);

    const orden = {
      comprador: { name, lastname, address, email },
      carrito: cart,
      total: total(),
      fecha: serverTimestamp(),
    };

    const orderColl = collection(db, "orders");

    addDoc(orderColl, orden)
      .then((res) => {
        clear();
        setOrderId(res.id);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  if (!cart.length && !orderId) {
    return <EmptyCart />;
  }

  return (
    <main className="checkout-page">
      {orderId ? (
        <div className="checkout-success">
          <h1>¡Gracias por tu compra!</h1>

          <p>
            Tu pedido ya fue registrado correctamente en
            <strong> Insomnio Records.</strong>
          </p>

          <div className="order-box">
            <h4>Número de orden</h4>
            <span>{orderId}</span>
          </div>

          <Link className="checkout-home" to="/">
            Volver a la disquería
          </Link>
        </div>
      ) : (
        <div className="checkout-container">
          <h1>Finalizar compra</h1>

          <p className="checkout-subtitle">
            Completá tus datos para generar la orden.
          </p>

          <form
            className="checkout-form"
            onSubmit={handleSubmit(terminarCompra)}
          >
            <input
              type="text"
              placeholder="Nombre"
              {...register("name", { required: true, minLength: 3 })}
            />
            {errors?.name && (
              <small>Complete este campo.</small>
            )}

            <input
              type="text"
              placeholder="Apellido"
              {...register("lastname", { required: true, minLength: 2 })}
            />
            {errors?.lastname && (
              <small>Complete este campo.</small>
            )}

            <input
              type="text"
              placeholder="Dirección"
              {...register("address", {
                required: true,
                minLength: 10,
                maxLength: 35,
              })}
            />
            {errors?.address && (
              <small>Complete este campo.</small>
            )}

            <input
              type="email"
              placeholder="Correo electrónico"
              {...register("email", { required: true })}
            />
            {errors?.email && (
              <small>Complete este campo.</small>
            )}

            <input
              type="email"
              placeholder="Repetí tu correo"
              {...register("secondemail", {
                required: true,
                validate: {
                  equalsMails: (mail2) =>
                    mail2 === getValues().email,
                },
              })}
            />

            {errors?.secondemail?.type === "required" && (
              <small>Complete este campo.</small>
            )}

            {errors?.secondemail?.type === "equalsMails" && (
              <small>Los correos no coinciden.</small>
            )}

            <button
              className="checkout-btn"
              disabled={loading}
            >
              {loading
                ? "Procesando compra..."
                : "Finalizar compra"}
            </button>
          </form>
        </div>
      )}
    </main>
  );
};

export default Checkout;