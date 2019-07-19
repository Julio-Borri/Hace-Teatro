import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import data from '../../data';
import fondo from '../../img/fondo oscuro.png';
import styled from 'styled-components';

export default function InfoDiv() {
  return (
    <Container fluid style={contStyle} className="text-white text-center py-3 bg-dark" >
      <Row className="d-flex flex-column ">
        <Col className="fb-ic fa-2x">
          <Responsiveh4 className=""><i className="fab fa-whatsapp mr-2"></i>{data.cardHome[0].text}</Responsiveh4>
        </Col>
        <Col className="fb-icfa-2x">
          <Responsiveh4 className=""><i className="fas fa-map-marker-alt mr-2"></i>{data.cardHome[1].text}</Responsiveh4>
        </Col>
      </Row>
    </Container>
  )
}

const contStyle = {
  backgroundImage: 'url(' + fondo + ')',
  backgroundPosition: "center",
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
}

const Responsiveh4 = styled.h4`
  @media screen and (max-width: 992px) {
    font-size: 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`