import React, { useState, useEffect } from "react";
import LivroTabela from "./LivroTabela";

const ListaLivros = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [livroId, setLivroId] = useState(1);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await fetch(`https://alexandria2.000webhostapp.com/apilivros.php?key=${API_KEY}`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setLivros(data.livros);
        } else {
          throw new Error("Não foi possível buscar os livros.");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchLivros();
  }, []);

  const livrosFiltrados = livros.filter(livro => livro.id === livroId);

  return (
    <>
      <input type="number" value={livroId} onChange={e => setLivroId(e.target.value)} />
      <LivroTabela livros={livrosFiltrados} />
    </>
  );
};

export default ListaLivros;
