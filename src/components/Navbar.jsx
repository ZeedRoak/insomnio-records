import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import insomnio from "../img/insomnio.png";
import CartDrawer from "./CartDrawer";
import CartWidget from "./CartWidget";
import "../css/Navbar.css";

function NavbarRB() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="navbar-insomnio">
        <Container fluid>
          <Navbar.Brand as={NavLink} to="/">
            <img src={insomnio} alt="logo" className="logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="navbar-content">
            <Nav className="nav-links">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>

              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/category/nacional">
                  Nacionales
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/category/internacional">
                  Internacionales
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/category/grandes-exitos">
                  Grandes Exitos
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <div className="search-box">
              <input type="text" placeholder="Buscar..." />
              <BsSearch />
            </div>

            <button
              className="cart-navbar-btn"
              onClick={() => setOpenCart(true)}
            >
              <CartWidget />
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CartDrawer isOpen={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}

export default NavbarRB;