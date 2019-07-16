import React, { Component } from 'react'
import TitleH1 from './styled components/TitleH1'
import data from '../Data'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';
import CardDark from './styled components/CardDark'
import logoOtoño from '../img/logootoño2.png'
import BotonesGrupo from './styled components/BotonesGrupo';


export default class Talleres extends Component {
  render() {

    const cardList = data.talleres.map(taller =>      
        <CardDark key={taller.id} taller={taller}/>      
    )

    return (
      <React.Fragment>
        <Container style={contStyle}>
          <Row>
            <TitleH1 title={data.titulos.titulo2}/>
          </Row>
          <CardDeck>
            {cardList}
          </CardDeck>
        </Container>
        <Container fluid className="d-flex justify-content-center align-item-center">
          <Row style={{margin: "100px 0"}}>
            <img src={logoOtoño} alt="logo otoño" style={{width: "100%"}}/>
          </Row>
        </Container>
        <BotonesGrupo 
          item1={data.dataLink[0]}
          item2={data.dataLink[2]}
          item3={data.dataLink[4]}
        />
      </React.Fragment>
    )
  }
}

const contStyle = {
  marginTop: "80px",
}

