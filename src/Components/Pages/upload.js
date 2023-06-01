import React, { useState } from 'react';

const FileUploadForm = () => {
  const [file, setFile] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [datapublicacao, setDataPublicacao] = useState('');
  const [editora, setEditora] = useState('');
  const [autor, setAutor] = useState('');
  const [idioma, setIdioma] = useState('');
  const [genero, setGenero] = useState('');
  const [capa, setCapa] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleDataPublicacaoChange = (event) => {
    setDataPublicacao(event.target.value);
  };

  const handleEditoraChange = (event) => {
    setEditora(event.target.value);
  };

  const handleAutorChange = (event) => {
    setAutor(event.target.value);
  };

  const handleIdiomaChange = (event) => {
    setIdioma(event.target.value);
  };

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };

  const handleCapaChange = (event) => {
    setCapa(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Cria um objeto FormData para enviar os dados e o arquivo
    const formData = new FormData();
    formData.append('pdf', file);
    formData.append('titulo', titulo);
    formData.append('datapublicacao', datapublicacao);
    formData.append('editora', editora);
    formData.append('autor', autor);
    formData.append('idioma', idioma);
    formData.append('genero', genero);
    formData.append('capa', capa);

    try {
      const response = await fetch('https://alexandria2.000webhostapp.com/upload.php', {
        method: 'POST',
        body: formData,
      });

      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error('Erro ao enviar o arquivo:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <input type="text" name="titulo" placeholder="Título" value={titulo} onChange={handleTituloChange} />
      <input type="text" name="datapublicacao" placeholder="Data de Publicação" value={datapublicacao} onChange={handleDataPublicacaoChange} />
      <input type="text" name="editora" placeholder="Editora" value={editora} onChange={handleEditoraChange} />
      <input type="text" name="autor" placeholder="Autor" value={autor} onChange={handleAutorChange} />
      <input type="text" name="idioma" placeholder="Idioma" value={idioma} onChange={handleIdiomaChange} />
      <input type="text" name="genero" placeholder="Gênero" value={genero} onChange={handleGeneroChange} />
      <input type="text" name="capa" accept="image/*" onChange={handleCapaChange} />
      <input type="file" name="pdf" accept=".pdf" onChange={handleFileChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FileUploadForm;
