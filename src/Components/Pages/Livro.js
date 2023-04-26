import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Image, Table } from 'react-bootstrap';


function Livro() {
  return (
    <>
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container style={{ height: '100%' }} className="d-flex align-items-center justify-content-center">
          <Row>
            <Col xs={12} md={4}>
              <Image src='' fluid />
            </Col>
            <Col xs={12} md={8}>
              <Table>
                <thead>
                  <tr>
                    <th>Titulo</th>
                    <th>O Saci</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Autor</td>
                    <td>Monteiro Lobato</td>
                  </tr>
                  <tr>
                    <td>Lançamento</td>
                    <td>1921</td>
                  </tr>
                  <tr>
                    <td>Língua</td>
                    <td>Português</td>
                  </tr>
                  <tr>
                    <td>Gênero</td>
                    <td>Fantasia</td>
                  </tr>
                </tbody>
              </Table>
              <div className="d-flex justify-content-center mt-5">
                <Button variant="danger" className="mx-2">Baixar PDF</Button>
                <Button variant="primary" className="mx-2">Ler Online</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
}

export default Livro;
