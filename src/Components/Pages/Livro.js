import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Table, Button, Spinner } from 'react-bootstrap';
import { format } from 'date-fns';
import { useParams } from "react-router-dom";

const Livro = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { id } = useParams();
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    const fetchLivro = async () => {
      try {
        const response = await fetch(`https://alexandria2.000webhostapp.com/apilivros.php?key=${API_KEY}`);
        if (response.ok) {
          const data = await response.json();
          const livroFiltrado = data.livros.find(livro => livro.id === id);
          setLivro(livroFiltrado);
        } else {
          throw new Error('Não foi possível buscar o livro.');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLivro();
  }, [id, API_KEY]);

  const handleDownload = () => {
    // Simular o download do arquivo do livro
    const link = document.createElement('a');
    link.href = livro.arquivo;
    link.download = `livro_${livro.titulo}.pdf`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  if (!livro) {
    return (
      <>
        <Spinner animation="border" size="sm" variant="primary" />
        Carregando Livro...
      </>
    );
  }

  return (
    <>
      <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container style={{ height: '100%' }} className="d-flex align-items-center justify-content-center">
          <Row>
            <Col xs={12} md={4}>
              <Image src={livro.capa} fluid style={{ height: '500px', width: '700px' }} />
            </Col>
            <Col xs={12} md={8}>
              <Table>
                <thead>
                  <tr>
                    <th>Titulo</th>
                    <th>{livro.titulo}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Autor</td>
                    <td>{livro.autor}</td>
                  </tr>
                  <tr>
                    <td>Lançamento</td>
                    <td>{format(new Date(livro.datapublicacao), 'dd/MM/yyyy')}</td>
                  </tr>
                  <tr>
                    <td>Língua</td>
                    <td>{livro.idioma}</td>
                  </tr>
                  <tr>
                    <td>Gênero</td>
                    <td>{livro.genero}</td>
                  </tr>
                </tbody>
              </Table>
              <div className="d-flex justify-content-center mt-5">
                <Button variant="danger" className="mx-2" onClick={handleDownload}>
                  Baixar PDF
                </Button>
                <Button variant="primary" className="mx-2">
                  Ler Online
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Livro;
