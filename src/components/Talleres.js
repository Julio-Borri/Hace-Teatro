import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import data from '../informacion';
import TitleH1 from './shared-components/TitleH1';
import CardDark2 from './shared-components/CardDark2';
import styled from 'styled-components';
import bgQuote from '../img/bgQuote.png';
import SkewedRow from './shared-components/SkewedRow';

export default function Talleres(props) {

  const cardList = data.talleres.map(item =>
    <CardDark2 key={item.id} item={item} />
  )

  return (
    <React.Fragment>
      <StyledContainer inputMarginTop={props.margenTop} className="pb-3 mb-5">
        <Row>
          <TitleH1 title={data.titulos.titulo2} />
        </Row>
        <Row style={{maxWidth: "800px"}} className="m-auto">
          {cardList}
        </Row>
      </StyledContainer>
      <Container fluid className="mt-5" style={quoteStyle}>
        <Row className="justify-content-center mb-2" >
          <Col xs={12} className="text-white text-center px-5 py-4">
            {data.textos.texto11}
          </Col>
        </Row>
        <SkewedRow />       
      </Container>
      <Row className="justify-content-center">
          <Col xs={12} className="text-white text-center mb-4">
            <Button variant="outline-dark text-capitalize font-weight-bold my-3" href={data.dataLink[2].enlace} size="lg"
            style={{fontFamily: "'Caveat', cursive",}}>
              {data.titulos.titulo4}
            </Button>
          </Col>
        </Row>
    </React.Fragment>
  )
}

const StyledContainer = styled(Container)`
  margin-top: ${props => props.inputMarginTop || "0px"};
`

const quoteStyle = {
  fontFamily: "'Caveat', cursive",
  fontSize: "25px",
  backgroundImage: 'url(' + bgQuote + ')',
  backgroundPosition: "center",
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
}