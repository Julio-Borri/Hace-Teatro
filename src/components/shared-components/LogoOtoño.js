import React from 'react';
import { Container, Row } from 'react-bootstrap';
import logoOtoño from '../../img/logootoño.png';  

export default function LogoOtoño() {
  return (
    <Container fluid className="d-flex justify-content-center align-item-center">
      <Row>
        <img src={logoOtoño} alt="logo otoño" style={{ width: "100%", margin: "50px 0" }} />
      </Row>
    </Container>
  )
}
