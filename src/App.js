import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import domcasmurro from './Components/images/domcasmurro.png';
import saci from './Components/images/saci.png';
import mobydick from './Components/images/mobydick.png';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Alexandria</Navbar.Brand>
          <Nav className="me-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Pesquisar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Pesquisar</Button>
            </Form>
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Livros">Livros</Nav.Link>
            <Nav.Link href="#Autores">Autores</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Row className="justify-content-center">
        <Card style={{ margin: '5%', width: '15rem' }}>
          <Card.Img variant="top" src={domcasmurro}/>
          <Card.Body>
            <Card.Title>Dom Casmurro</Card.Title>
            <Card.Text>
              Machado de Assis
            </Card.Text>
            <Button variant="primary">Ver Livro</Button>
          </Card.Body>
        </Card>
        <Card style={{ margin: '5%', width: '15rem' }}>
          <Card.Img variant="top" src={mobydick}/>
          <Card.Body>
            <Card.Title>Moby Dick</Card.Title>
            <Card.Text>
              Herman Melville
            </Card.Text>
            <Button variant="primary">Ver Livro</Button>
          </Card.Body>
        </Card>
        <Card style={{ margin: '5%', width: '15rem' }}>
          <Card.Img variant="top" src={saci}/>
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
