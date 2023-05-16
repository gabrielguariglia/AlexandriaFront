import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Button, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [setLivroId] = useState('');
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await fetch(`https://alexandria2.000webhostapp.com/apilivros.php?key=${API_KEY}`);
        if (response.ok) {
          const data = await response.json();
          setLivros(data.livros);
        } else {
          throw new Error('Não foi possível buscar os livros.');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchLivros();
  }, []);

  if (livros.length === 0) {
    return <div>Carregando livros...</div>;
  }

  const renderLivros = () => {
    return livros.map(livro => (
      <Card key={livro.id} style={{ margin: '5%', width: '15rem' }}>
        <div style={{ height: '300px' }}>
          <Card.Img variant="top" src={livro.capa} style={{ marginTop: '5%',height: '100%', width: '100%', objectFit: 'cover' }} />
        </div>
        <Card.Body>
          <Card.Title>{livro.titulo}</Card.Title>
          <Card.Text>{livro.autor}</Card.Text>
          <Button variant="primary" as={Link} to={`/livro/${livro.id}`} onClick={() => setLivroId(livro.id)}>
            Ver Livro
          </Button>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <>
      <Row className="justify-content-center">
        {renderLivros()}
      </Row>
    </>
  );
}

export default Home;
