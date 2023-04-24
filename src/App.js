import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import logo from './Components/images/logo.png';
import saci from './Components/images/saci.png'
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
          <img style={{ width: 40, height: 50 }}
           src={logo} alt="React Logo"/>
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
      </Navbar>

      <Container className="justify-content-center">
        <Col>
          <Row>
            <img style={{ margin: '6%', width: '25rem' }}
              src={saci} alt="Imagem Livro" />
            <Col>
              <Table>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Container>

    </>
  );
}

export default App;
