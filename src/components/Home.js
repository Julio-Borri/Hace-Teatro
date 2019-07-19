import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import data from '../data';
import TitleH1 from './shared-components/TitleH1'
import bgHeader from '../img/fondoLimpioLD1.jpg';
import logoHaceTeatro from '../img/logoBrushShadowOrange.png';
import logoOtoño from '../img/logootoño2.png'
import BotonesGrupo from './shared-components/BotonesGrupo';
import ResponsiveTitle from './shared-components/ResponsiveTitle';
import Talleres from './Talleres';
import InfoDiv from './shared-components/InfoDiv';

export default class Home extends Component {
  render() {
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
          <Row className="d-flex justify-content-center align-content-center mb-1">
            <ResponsiveTitle inputColor="dark" className="text-center w-50">
              {data.textos.texto1}
            </ResponsiveTitle>
            <ResponsiveTitle inputColor="white" className="text-center w-100" style={h1Divstyle}>
              {data.textos.texto2}
            </ResponsiveTitle>
          </Row>
          <Container fluid className="d-flex justify-content-center align-item-center">
            <Row>
              <img src={logoOtoño} alt="logo otoño" style={{ width: "100%", margin: "50px 0" }} />
            </Row>
          </Container>
        </Container>
        <InfoDiv />
        <Talleres />
        <BotonesGrupo
          item2={data.dataLink[2]}
          item1={data.dataLink[3]}
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
  backgroundAttachment: 'fixed',
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
  background: "linear-gradient(to right, #32383e, #e16f22)",
};
