import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
        <Row className="justify-content-center">
          <Card style={{ margin:'15%', width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Placeholder</Card.Title>
              <Card.Text>
                Texto
              </Card.Text>
              <Button variant="primary">Ver Livro</Button>
            </Card.Body>
          </Card>
          <Card style={{ margin:'15%', width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Placeholder</Card.Title>
              <Card.Text>
                Texto
              </Card.Text>
              <Button variant="primary">Ver Livro</Button>
            </Card.Body>
          </Card>
        </Row>
      

    </>
  );
}

export default App;
