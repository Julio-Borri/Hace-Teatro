import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import data from '../data'
import TitleH1 from './shared-components/TitleH1'
import BotonesGrupo from './shared-components/BotonesGrupo';
import BrandLogo from '../img/logoLimpio.png';


export default function GallerySlide() {
  return (
    <React.Fragment>
      <Container style={{ marginTop: "80px" }}>
        <Row>
          <TitleH1 title={data.titulos.titulo5} />
        </Row>
      </Container>
      <Container style={cont2Style}>
        <Row>
          <Col md={12}>
            <Carousel className="border">
              <Carousel.Item style={carrStyle} className="bg-dark">
                <Image src={data.galeria[0].img} style={imgStyle} />
                <Carousel.Caption>
                  <img src={BrandLogo} width="300" alt="Logo HaceTeatro"/>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={carrStyle} className="bg-dark">
                <Image src={data.galeria[1].img} style={imgStyle} />
                <Carousel.Caption>
                  <img src={BrandLogo} width="300" alt="Logo HaceTeatro"/>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={carrStyle} className="bg-dark">
                <Image src={data.galeria[2].img} style={imgStyle} />
                <Carousel.Caption>
                  <img src={BrandLogo} width="300" alt="Logo HaceTeatro"/>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={carrStyle} className="bg-dark">
                <Image src={data.galeria[3].img} style={imgStyle} />
                <Carousel.Caption>
                  <img src={BrandLogo} width="300" alt="Logo HaceTeatro"/>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={carrStyle} className="bg-dark">
                <Image src={data.galeria[4].img} style={imgStyle} />
                <Carousel.Caption>
                  <img src={BrandLogo} width="300" alt="Logo HaceTeatro"/>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <BotonesGrupo
        item1={data.dataLink[0]}
        item2={data.dataLink[1]}
        item3={data.dataLink[4]}
      />
    </React.Fragment>
  )
}

const cont2Style = {
  height: "60vh",
  width: "80vmin",
  marginBottom: "80px",
}

const carrStyle = {
  height: "60vh",
  width: "100%",
}

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  overflow: "hidden",
}