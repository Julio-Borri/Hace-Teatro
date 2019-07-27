import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../Data';
import BrandLogo2 from '../img/logoLimpio.png';
import FooterIconos from './shared-components/FooterIconos';
import BrandLogo from './shared-components/BrandLogo';

export default function Footer() {

  const iconosList = data.iconos.map(item => 
    <FooterIconos key={item.id} item={item}/>)

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col md={4} className="d-flex justify-content-center align-items-center py-2" style={{background: "black",}}>
            <img src={BrandLogo2} width="200" alt="Logo HaceTeatro" />
          </Col>
          <Col md={4} className="d-flex justify-content-center align-items-center py-2" style={{background: "black",}}>
            {iconosList}
          </Col>
          <Col md={4} className="d-flex justify-content-center align-items-center py-2" style={{background: "black",}}>          
            <span className="text-white mr-2 font-italic">designed by</span>
            <BrandLogo />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

