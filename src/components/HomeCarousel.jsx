import Carousel from "react-bootstrap/Carousel";
import "../css/HomeCarousel.css";

import frusciante from "../img/jhon.png";
import hendrix from "../img/jimmy.png";
import cobain from "../img/kurt.png";
import homme from "../img/homme.png";
import yorke from "../img/yorke.png";

function HomeCarousel() {
  return (
    <Carousel
      fade
      controls={false}
      interval={3500}
      pause={false}
      touch={false}
      keyboard={false}
    >
      <Carousel.Item className="slide-frusciante">
        <img className="carousel-img" src={frusciante} alt="Frusciante" />

        <Carousel.Caption>
          <h2>La música no duerme.</h2>
          <p>Nosotros tampoco.</p>
            <button className="carousel-btn">
                EXPLORAR CATÁLOGO
            </button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="slide-hendrix">
        <img className="carousel-img" src={hendrix} alt="Hendrix" />

        <Carousel.Caption>
          <h2>Discos que hicieron historia.</h2>
          <p>Encontrá tu próximo favorito.</p>
            <button className="carousel-btn">
                EXPLORAR CATÁLOGO
            </button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="slide-cobain">
        <img className="carousel-img" src={cobain} alt="Cobain" />

        <Carousel.Caption>
          <h2>El sonido de generaciones.</h2>
          <p>Del grunge al progresivo.</p>
            <button className="carousel-btn">
                EXPLORAR CATÁLOGO
            </button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="slide-homme">
        <img className="carousel-img" src={homme} alt="Josh Homme" />

        <Carousel.Caption>
          <h2>Rock sin límites.</h2>
          <p>Vinilos, CDs y clásicos inolvidables.</p>
            <button className="carousel-btn">
                EXPLORAR CATÁLOGO
            </button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="slide-yorke">
        <img className="carousel-img" src={yorke} alt="Thom Yorke" />

        <Carousel.Caption>
          <h2>Escuchá diferente.</h2>
          <p>Descubrí música para cualquier momento.</p>
          <button className="carousel-btn">
                EXPLORAR CATÁLOGO
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;