import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <Row className="justify-content-center">
        <Card style={{ margin: '5%', width: '15rem' }}>
          <Card.Img variant="top" src='{domcasmurro}'/>
          <Card.Body>
            <Card.Title>Dom Casmurro</Card.Title>
            <Card.Text>
              Machado de Assis
            </Card.Text>
            <Button variant="primary">Ver Livro</Button>
          </Card.Body>
        </Card>
        <Card style={{ margin: '5%', width: '15rem' }}>
          <Card.Img variant="top" src='https://images.mubicdn.net/images/cast_member/2801/cache-590021-1600900173/image-w856.jpg'/>
          <Card.Body>
            <Card.Title>Moby Dick</Card.Title>
            <Card.Text>
              Herman Melville
            </Card.Text>
            <Button variant="primary">Ver Livro</Button>
          </Card.Body>
        </Card>
        <Card style={{ margin: '5%', width: '15rem' }}>
          <Card.Img variant="top" src='{saci}'/>
          <Card.Body>
            <Card.Title>O Saci</Card.Title>
            <Card.Text>
              Monteiro Lobato
            </Card.Text>
            <Button variant="primary" as={Link} to="/Livro">Ver Livro</Button>
          </Card.Body>
        </Card>
      </Row>
    </>
  );
}

export default App;
