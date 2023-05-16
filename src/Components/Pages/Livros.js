import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { format } from 'date-fns';

function Livros() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

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
        <tbody>
          {livros.map((livro, index) => (
            <tr key={index}>
              <td>{livro.titulo}</td>
              <td>{livro.autor}</td>
              <td>{livro.genero}</td>
              <td>{format(new Date(livro.datapublicacao), 'dd/MM/yyyy')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Livros;