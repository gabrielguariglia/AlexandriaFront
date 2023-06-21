import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Table, Button, Spinner } from 'react-bootstrap';
import noImage from '../images/noImage.png';
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
    const fileName = `livro_${livro.titulo}.pdf`;

    // Chame o endpoint de download do seu backend
    fetch(`https://alexandria2.000webhostapp.com/download.php?file=${livro.arquivo}`)
      .then(response => {
        // Verifique se a resposta é bem-sucedida
        if (response.ok) {
          // Obtém o arquivo blob da resposta
          response.blob().then(blob => {
            // Cria um link temporário para download
            const downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(blob);
            downloadLink.download = fileName;
            downloadLink.target = '_blank';
            downloadLink.rel = 'noopener noreferrer';
            downloadLink.click();
          });
        } else {
          console.error('Falha ao fazer o download do arquivo.');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleLerOnline = () => {
    const fileName2 = `${livro.leituraonline}`;

    if (livro.leituraonline) {
      // Chame o endpoint de download do seu backend
      fetch(`https://alexandria2.000webhostapp.com/apilivros.php?key=${API_KEY}&file=${livro.leituraonline}`)
        .then(response => {
          // Verifique se a resposta é bem-sucedida
          if (response.ok) {
            // Obtém o arquivo blob da resposta
            response.blob().then(blob => {
              const downloadLink = document.createElement('a');
              downloadLink.href = window.URL.createObjectURL(blob);
              // Cria um link temporário para download
              const endereco = fileName2;
              console.log(endereco);
              // Abrir o link em uma nova janela
              window.open(endereco, '_blank');
            });
          } else {
            console.error('Falha ao fazer o download do arquivo.');
          }
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      // Caso o campo leituraonline seja null, abrir o arquivo PDF diretamente
      const arquivo = `https://alexandria2.000webhostapp.com/${livro.arquivo}`;
      window.open(arquivo, '_blank');
    }
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
              {livro.capa ? (
                <Image src={livro.capa} fluid style={{ height: '500px', width: '700px' }} />
              ) : (
                <Image src={noImage} fluid style={{ height: '500px', width: '700px' }} />
              )}
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
                    <td>Editora</td>
                    <td>{livro.editora ? livro.editora : 'Não informado'}</td>
                  </tr>
                  <tr>
                    <td>Lançamento</td>
                    <td>{livro.datapublicacao}</td>
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
                <Button variant="primary" className="mx-2" onClick={handleLerOnline}>
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