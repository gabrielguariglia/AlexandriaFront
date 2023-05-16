import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import logo from './Components/images/logo.png';
import Home from './Components/Pages/Home'
import Livro from './Components/Pages/Livro'
import Livros from './Components/Pages/Livros';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img style={{ width: 40, height: 50, marginRight: 10 }} src={logo} alt="React Logo" />
          Alexandria
        </Navbar.Brand>
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
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/livros">Livros</Nav.Link>
        </Nav>
      </Navbar>

      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livro/:id" element={<Livro />} />
          <Route path="/livros" element={<Livros />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;