import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import './style.scss';

function Sponsors() {
  return (
    <div>
      <h3>Our Sponsors:</h3>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src="" rounded alt="delivery-serviços" />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src=".\images\SponsorImg\health-fitness-serviçes-imagem.jpg"
              rounded
              alt="eventos-serviços"
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="../../../public/images/SponsorImg/health-fitness-serviçes-imagem.jpg"
              rounded
              alt="health-fitness"
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="../../../public/images/SponsorImg/seguros-serviços-imagem.png"
              rounded
              alt="seguros-serviços"
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="../../../public/images/SponsorImg/servico-limpeza-imagem.png"
              rounded
              alt="serviços-limpeza"
            />
          </Col>
          <Col xs={6} md={4}>
            <Image src="../../../public/logo512.png" rounded alt="reparaçoes-serviços" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sponsors;
