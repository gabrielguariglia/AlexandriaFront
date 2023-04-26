import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <>
    <Row className="justify-content-center">
        <Card style={{ margin: '5%', width: '15rem' }}>
          <Card.Img variant="top" src=''/>
          <Card.Body>
            <Card.Title>Dom Casmurro</Card.Title>
            <Card.Text>
              Machado de Assis
            </Card.Text>
            <Button variant="primary">Ver Livro</Button>
          </Card.Body>
        </Card>
        <Card style={{ margin: '5%', width: '15rem' }}>
          <Card.Img variant="top" src=''/>
          <Card.Body>
            <Card.Title>Moby Dick</Card.Title>
            <Card.Text>
              Herman Melville
            </Card.Text>
            <Button variant="primary">Ver Livro</Button>
          </Card.Body>
        </Card>
        <Card style={{ margin: '5%', width: '15rem' }}>
          <Card.Img variant="top" src=''/>
          <Card.Body>
            <Card.Title>O Saci</Card.Title>
            <Card.Text>
              Monteiro Lobato
            </Card.Text>
            <Button variant="primary">Ver Livro</Button>
          </Card.Body>
        </Card>
        
      </Row>


    </>
  );
}

export default App;
