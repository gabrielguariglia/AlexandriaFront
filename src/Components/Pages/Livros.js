import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns';
import { useLocation, Link } from 'react-router-dom';

function Livros() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [livros, setLivros] = useState([]);
  const [livrosFiltrados, setLivrosFiltrados] = useState([]);
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search');

  useEffect(() => {
    fetchLivros();
  }, []);

  useEffect(() => {
    filterLivros();
  }, [searchTerm, livros]);

  const fetchLivros = async () => {
    try {
      const response = await fetch(`https://alexandria2.000webhostapp.com/apilivros.php?key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Erro ao obter dados da API');
      }
      const data = await response.json();
      setLivros(data.livros);
    } catch (error) {
      console.log(error);
    }
  };

  const filterLivros = () => {
    if (searchTerm) {
      const filteredLivros = livros.filter(livro =>
        livro.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setLivrosFiltrados(filteredLivros);
    } else {
      setLivrosFiltrados(livros);
    }
  };

  if (livros.length === 0) {
    return (
      <div className="container mt-5">
        <h1 className="mb-5">Livros disponíveis</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Autor</th>
              <th scope="col">Género</th>
              <th scope="col">Ano</th>
            </tr>
          </thead>
        </table>
        <Spinner animation="border" size="sm" variant="primary" />
        Carregando Livros...
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-5">Livros disponíveis</h1>
      {livrosFiltrados.length === 0 ? (
        <p>Nenhum livro encontrado</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Autor</th>
              <th scope="col">Género</th>
              <th scope="col">Ano</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {livrosFiltrados.map((livro, index) => (
              <tr key={index}>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>{livro.genero}</td>
                <td>{format(new Date(livro.datapublicacao), 'dd/MM/yyyy')}</td>
                <td>
                  <Link to={`/livro/${livro.id}`} className="btn btn-primary btn-sm">Ver Livro</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );  
}

export default Livros;
