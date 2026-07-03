import { Link } from "react-router-dom";
import errorBg from "../img/error.avif";

const Error = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: `linear-gradient( rgba(0,0,0,.65),rgba(0,0,0,.75)), url(${errorBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "6rem", fontWeight: "bold" }}>404</h1>

      <h2 style={{ marginBottom: "10px" }}>Este disco nunca salió.</h2>

      <p style={{ fontSize: "1.2rem", maxWidth: "500px" }}>
        La página que estás buscando no existe en el catálogo de Insomnio.
      </p>

      <Link
        to="/"
        className="btn btn-light mt-3"
        style={{
          fontWeight: "bold",
          padding: "10px 24px",
          borderRadius: "0",
        }}
      >
        Volver a la disquería
      </Link>
    </div>
  );
};

export default Error;