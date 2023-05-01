import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import logo from './Components/images/logo.png';
import Home from './Components/Pages/Home'
import Livro from './Components/Pages/Livro'

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#Home">
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
          <Nav.Link href="/autores">Autores</Nav.Link>
        </Nav>
      </Navbar>

      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
        <Route exact path="/Livro" element={<Livro />} />
        </Routes>
        <Routes>
        <Route exact path="/livros" element={<Livros />} />
        </Routes>
        <Routes>
        <Route exact path="/autores" element={<Autores />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;