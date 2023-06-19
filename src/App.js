import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './Components/images/logo.png';
import Home from './Components/Pages/Home';
import Livro from './Components/Pages/Livro';
import Livros from './Components/Pages/Livros';
import Search from './Components/Pages/Search';
import FileUploadForm from './Components/Pages/upload';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">
            <img style={{ width: 40, height: 50, marginRight: 10 }} src={logo} alt="React Logo" />
            Alexandria
          </Navbar.Brand>
          <Nav className="me-auto">
            <Search />
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/livros">Livros</Nav.Link>
            <Nav.Link as={Link} to="/upload">Envie um livro</Nav.Link>
          </Nav>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/livro/:id" element={<Livro />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/upload" element={<FileUploadForm />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
