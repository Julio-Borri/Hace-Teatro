import React from 'react';
import { Row, CardDeck, Container, Col, Button } from 'react-bootstrap';
import data from '../data';
import TitleH1 from './shared-components/TitleH1';
import CardDark from './shared-components/CardDark';
import styled from 'styled-components';

export default function Talleres(props) {

  const cardList = data.talleres.map(taller =>
    <CardDark key={taller.id} taller={taller} />
  )

  return (
    <React.Fragment>
      <StyledContainer inputMarginTop={props.margenTop} className="pb-3 mb-5">
        <Row>
          <TitleH1 title={data.titulos.titulo2} />
        </Row>
        <CardDeck>
          {cardList}
        </CardDeck>
      </StyledContainer>
      <Container fluid className="my-5 bg-dark" style={quoteStyle}>
        <Row className="justify-content-center mb-2" >
          <Col xs={12} className="text-white text-center px-5 pt-5">
            {data.textos.texto11}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} className="text-white text-center mt-3 mb-4">
            <Button variant="outline-light text-capitalize" href={data.dataLink[2].enlace} size="lg">
              {data.titulos.titulo4}
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

const StyledContainer = styled(Container)`
  margin-top: ${props => props.inputMarginTop || "0px"};
`

const quoteStyle = {
  fontFamily: "'Caveat', cursive",
  fontSize: "25px",
}