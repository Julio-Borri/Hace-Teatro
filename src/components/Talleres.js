import React, { Component } from 'react'
import TitleH1 from './shared-components/TitleH1'
import data from '../data'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';
import CardDark from './shared-components/CardDark'



export default class Talleres extends Component {
  render() {

    const cardList = data.talleres.map(taller =>
      <CardDark key={taller.id} taller={taller} />
    )

    return (
      <React.Fragment>
        <Container style={contStyle} className="pb-3 mb-5">
          <Row>
            <TitleH1 title={data.titulos.titulo2} />
          </Row>
          <CardDeck>
            {cardList}
          </CardDeck>
        </Container>
      </React.Fragment>
    )
  }
}

const contStyle = {
  marginTop: "80px",
}

