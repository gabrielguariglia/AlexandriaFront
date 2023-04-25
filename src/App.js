import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button, Navbar, Form } from 'react-bootstrap';
import logo from './Components/images/logo.png'

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
          <img style={{ width: 40, height: 50 }}
           src={logo} alt="React Logo"/>
          <Navbar.Brand href="#Home">Alexandria</Navbar.Brand>
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
      </Navbar>
    </>
  );
}

export default App;
