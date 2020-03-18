import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import './style.scss';

function Sponsors() {
  return (
    <div className="container-sponsor">
      <h3 className="mt-4">Our Sponsors:</h3>
      <Container className="mt-4">
        <Row className="container-row">
          <Col className="container-col">
            <Image
              className="img-sponsor"
              src="./images/SponsorImg/delivery-servicos-image.png"
              rounded
              alt="delivery-serviços"
            />
          </Col>
          <Col className="container-col">
            <Image
              className="img-sponsor"
              src="./images/SponsorImg/eventos-servicos-image.jpeg"
              rounded
              alt="eventos-servicos"
            />
          </Col>
          <Col className="container-col">
            <Image
              className="img-sponsor"
              src="./images/SponsorImg/health-fitness-services-image.jpg"
              rounded
              alt="health-fitness-services"
            />
          </Col>
          <Col className="container-col">
            <Image
              className="img-sponsor"
              src="./images/SponsorImg/seguros-servicos-image.png"
              rounded
              alt="serviços-seguros"
            />
          </Col>
          <Col className="container-col">
            <Image
              className="img-sponsor"
              src="./images/SponsorImg/servico-limpeza-imagem.png"
              rounded
              alt="limpeza-serviços"
            />
          </Col>
          <Col className="container-col">
            <Image
              className="img-sponsor"
              src="./images/SponsorImg/servicos-reparacoes-image.png"
              rounded
              alt="reparaçoes-serviços"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sponsors;
