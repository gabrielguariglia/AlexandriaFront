import React from "react";

function LivroTabela(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Autor</th>
          <th>Categoria</th>
        </tr>
      </thead>
      <tbody>
        {props.livros.map((livro) => (
          <tr key={livro.id}>
            <td>{livro.id ? livro.id : ""}</td>
            <td>{livro.nome}</td>
            <td>{livro.autor}</td>
            <td>{livro.categoria}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LivroTabela;
