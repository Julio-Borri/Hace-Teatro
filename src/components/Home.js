import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import data from '../Data';
import TitleH1 from './styled components/TitleH1'
import bgHeader from '../img/fondoLimpioLD1.jpg';
import logoHaceTeatro from '../img/logoBrushShadowOrange.png';
import logoOtoño from '../img/logootoño2.png'
import CardDeck from 'react-bootstrap/CardDeck';
import CardIcono from './styled components/CardIcono';
import BotonesGrupo from './styled components/BotonesGrupo';

export default class Home extends Component {
  render() {
    const cardList = data.cardHome.map(card =>  
        <CardIcono key={card.id} cardHome={card} />)

    return (
      <React.Fragment>
        <Container fluid style={headerStyle} className="d-flex align-content-center justify-content-center">
          <Row style={logoDivStyle}>
            <img src={logoHaceTeatro} style={imgStyle} alt="Logo HaceTeatro" />
          </Row>
        </Container>
        <Container fluid className="mt-4">
          <Row>
            <TitleH1 title={data.titulos.titulo1} />
          </Row>
          <Row className="d-flex justify-content-center align-content-center mb-5">
            <h1 style={h1Divstyle2} className="text-dark text-center text-capitalize w-75">
              {data.textos.texto1}
            </h1>
            <h1 style={h1Divstyle} className="text-light text-center text-capitalize w-100">
              {data.textos.texto2}<br />
            </h1>
          </Row>
          <CardDeck className="w-50 m-auto">
            {cardList}
          </CardDeck>         
          <Container fluid className="d-flex justify-content-center align-item-center my-2">
            <Row>
              <img src={logoOtoño} alt="logo otoño" style={{ width: "100%", margin: "50px 0" }} />
            </Row>
          </Container>
        </Container>
        <BotonesGrupo 
          item1={data.dataLink[1]}
          item2={data.dataLink[2]}
          item3={data.dataLink[4]}
        />
        
      </React.Fragment>
    )
  }
}

//Styles 

const headerStyle = {
  height: "70vmin",
  backgroundImage: 'url(' + bgHeader + ')',
  backgroundPosition: "center",
  backgroundSize: 'cover',
  overflow: 'hidden',
};

const logoDivStyle = {
  width: "80vw",
  margin: "auto",
};

const imgStyle = {
  width: "100%",
};

const h1Divstyle = {
  fontSize: "5vw",
  background: "linear-gradient(to right, #32383e, #e16f22)",
  fontFamily: "'Caveat', cursive",
};

const h1Divstyle2 = {
  fontSize: "6vw",
  fontFamily: "'Caveat', cursive",
};
