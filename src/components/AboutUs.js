import React, { Component } from 'react';
import data from '../Data';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import TitleH1 from './shared-components/TitleH1';
import BotonesGrupo from './shared-components/BotonesGrupo';
import bgImg from '../img/fondoparrafo5.png';
import Nav from 'react-bootstrap/Nav'


export default class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid style={contStyle}>
          <Row>
            <TitleH1 title={data.titulos.titulo4} />
          </Row>
          <div style={pStyle} className="text-justify m-auto w-75">
            <p>{data.textos.texto3}</p>
            <p className="my-3 font-weight-bolder">{data.textos.texto4}</p>
            <p className="my-3 font-weight-bolder">{data.textos.texto5}</p>
            <p>{data.textos.texto6}</p>
            <p>{data.textos.texto7}</p>
            <p>{data.textos.texto8}</p>
            <p className="my-3 font-weight-bolder">{data.textos.texto9}</p>
            <p>{data.textos.texto10}</p>
            <p>
              <Row>
                <Nav.Link href="https://www.youtube.com/user/ChatarraDeOsamentas">
                  <i class="fab fa-youtube fa-2x" style={youtube}></i>
                </Nav.Link>
                <Nav.Link href="https://www.facebook.com/chatarradeosamentasteatro/">
                  <i class="fab fa-facebook fa-2x" style={facebook}></i>
                </Nav.Link>
              </Row>
            </p>
          </div>
        </Container>
        <BotonesGrupo
          item1={data.dataLink[0]}
          item2={data.dataLink[1]}
          item3={data.dataLink[4]}
        />
      </React.Fragment>
    )
  }
}

const contStyle = {
  marginTop: "100px",
  background: 'url(' + bgImg + ')',
  backgroundSize: "contain",
}

const pStyle = {
  fontSize: "2vh",
  maxWidth: "1000px",
}

const youtube = {
  color: "#c4302b",
}
const facebook = {
  color: "#3b5998",
}