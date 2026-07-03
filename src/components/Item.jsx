
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"
import "../css/Item.css";

function Item({prod}) {
  return (
    <Card className="product-card">
      <Card.Img
        variant="top"
        src={prod.img}
        className="product-img"
      />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          ${prod.price}
        </Card.Text>
          <Link className='btn btn-dark' to={`/item/${prod.id}`}>Ver Más</Link>
      </Card.Body>
    </Card>
  );
}

export default Item;