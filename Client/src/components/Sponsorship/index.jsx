import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import './style.scss';

function Sponsors() {
  return (
    <div>
      <hr />
      <h3>Our Sponsors:</h3>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image
              src="./images/SponsorImg/delivery-servicos-image.png"
              rounded
              alt="delivery-serviços"
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="./images/SponsorImg/eventos-servicos-image.jpeg"
              rounded
              alt="eventos-servicos"
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="./images/SponsorImg/health-fitness-services-image.jpg"
              rounded
              alt="health-fitness-services"
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="./images/SponsorImg/seguros-servicos-image.png"
              rounded
              alt="serviços-seguros"
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="./images/SponsorImg/servico-limpeza-imagem.png"
              rounded
              alt="limpeza-serviços"
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
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
