import Card from 'react-bootstrap/Card';
import image from './images/hack.jpg'
function ImageAndTextExample() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      
    
    </>
  );
}

export default ImageAndTextExample;


