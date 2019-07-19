import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../Data';
import BrandLogo from '../img/logoLimpio.png';
import FooterIconos from './styled components/FooterIconos';

export default function Footer() {

  const iconosList = data.iconos.map(item => 
    <FooterIconos key={item.id} item={item}/>)

  return (
    <React.Fragment>
      <Container fluid style={footerStyle}>
        <Row>
          <Col md={4} className="bg-dark d-flex justify-content-center align-items-center py-2">
            <img src={BrandLogo} width="200" alt="Logo HaceTeatro" />
          </Col>
          <Col md={4} className="bg-dark d-flex justify-content-center align-items-center py-2">
            {iconosList}
          </Col>
          <Col md={4} className="bg-dark d-flex justify-content-center align-items-center py-2" >          
            <span className="text-white mr-2 font-italic">designed by</span>
            <div className="border rounded-lg px-2 py-1" style={logoStyle}>
              <span className="text-white text-uppercase mr-1 font-weight-bold">flying</span>
              <span className="text-white text-uppercase mr-1 font-weight-bold text-info">cat</span>
            </div>
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