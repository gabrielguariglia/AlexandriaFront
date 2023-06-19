import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const FileUploadForm = () => {
  const [file, setFile] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [datapublicacao, setDataPublicacao] = useState('');
  const [editora, setEditora] = useState('');
  const [autor, setAutor] = useState('');
  const [idioma, setIdioma] = useState('');
  const [genero, setGenero] = useState('');
  const [capa, setCapa] = useState('');
  const [flipbook, setFlipbook] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleFlipbookChange = (event) => {
    setFlipbook(event.target.value);
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
    formData.append('flipbook', flipbook);

    try {
      const response = await fetch('https://alexandria2.000webhostapp.com/upload.php', {
        method: 'POST',
        body: formData,
      });

      const data = await response.text();
      setSuccessMessage('Arquivo enviado com sucesso!');
      setErrorMessage('');
      console.log(data);

      // Limpa os campos do formulário após o envio bem-sucedido
      setTitulo('');
      setDataPublicacao('');
      setEditora('');
      setAutor('');
      setIdioma('');
      setGenero('');
      setCapa('');
      setFlipbook('');
      setFile(null);

    } catch (error) {
      setErrorMessage('Erro ao enviar o arquivo: ' + error.message);
      setSuccessMessage('');
      console.error('Erro ao enviar o arquivo:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={7}>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formTitulo">
              <Form.Label column sm={3}>
                Título
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Título" value={titulo} onChange={handleTituloChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formDataPublicacao">
              <Form.Label column sm={3}>
                Ano de Lançamento
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Ano de Lançamento" value={datapublicacao} onChange={handleDataPublicacaoChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formEditora">
              <Form.Label column sm={3}>
                Editora
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Editora" value={editora} onChange={handleEditoraChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formAutor">
              <Form.Label column sm={3}>
                Autor
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Autor" value={autor} onChange={handleAutorChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formIdioma">
              <Form.Label column sm={3}>
                Idioma
              </Form.Label>
              <Col sm={9}>
                <Form.Control as="select" value={idioma} onChange={handleIdiomaChange}>
                  <option value="">Selecione um Idioma</option>
                  <option value="inglês">Inglês</option>
                  <option value="português">Português</option>
                  <option value="espanhol">Espanhol</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formGenero">
              <Form.Label column sm={3}>
                Gênero
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Gênero" value={genero} onChange={handleGeneroChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formCapa">
              <Form.Label column sm={3}>
                Capa
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Link da imagem" onChange={handleCapaChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formFlipbook">
              <Form.Label column sm={3}>
                Flipbook*
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Flipbook" onChange={handleFlipbookChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formPdf">
              <Form.Label column sm={3}>
                PDF
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="file" accept=".pdf" onChange={handleFileChange} />
              </Col>
            </Form.Group>
            <Col className="text-center">
              *opcional
            </Col>
            <Col className="text-center">
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FileUploadForm;
