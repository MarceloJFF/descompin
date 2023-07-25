import CardBS from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
 const Card = (props) => {
  return (
    <CardBS>
      <CardBS.Img src={props.image} alt="Card image" />
      <CardBS.ImgOverlay>

        <Button variant="primary">
          Profile <Badge bg="secondary">{props.total}</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
      </CardBS.ImgOverlay>
      <CardBS.Body>
        <CardBS.Title> {props.title} </CardBS.Title>
        </CardBS.Body>
    </CardBS>
  );
}
export default Card;
