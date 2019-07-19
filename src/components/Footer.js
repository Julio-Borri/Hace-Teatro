import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../data';
import BrandLogo2 from '../img/logoLimpio.png';
import FooterIconos from './shared-components/FooterIconos';
import BrandLogo from './shared-components/BrandLogo';

export default function Footer() {

  const iconosList = data.iconos.map(item => 
    <FooterIconos key={item.id} item={item}/>)

  return (
    <React.Fragment>
      <Container fluid style={footerStyle}>
        <Row>
          <Col md={4} className="bg-dark d-flex justify-content-center align-items-center py-2">
            <img src={BrandLogo2} width="200" alt="Logo HaceTeatro" />
          </Col>
          <Col md={4} className="bg-dark d-flex justify-content-center align-items-center py-2">
            {iconosList}
          </Col>
          <Col md={4} className="bg-dark d-flex justify-content-center align-items-center py-2" >          
            <span className="text-white mr-2 font-italic">designed by</span>
            <BrandLogo />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}


const footerStyle = {
  // position: "fixed",
  // bottom: "0",
}

const logoStyle = {
  fontFamily: "'Open Sans', sans-serif",
  fontSize: "20px",
}