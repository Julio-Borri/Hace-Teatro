import React from 'react'
import { Container, Col, Row, Carousel, Image } from 'react-bootstrap'
import data from '../data'
import TitleH1 from './shared-components/TitleH1'
import BotonesGrupo from './shared-components/BotonesGrupo';

export default function GallerySlide() {
  return (
    <React.Fragment>
      <Container style={{ marginTop: "80px" }}>
        <Row>
          <TitleH1 title={data.titulos.titulo5} />
        </Row>
      </Container>
      <Container style={cont2Style} >
        <Row >
          <Col md={12} >
            <Carousel className="border">
              <Carousel.Item style={carrStyle} >
                <Image src={data.galeria[0].img} style={imgStyle} />
                <Carousel.Caption>
                  <h1 className="text-uppercase">hacé<span className="font-weight-bold"> teatro </span></h1>
                </Carousel.Caption>
              </Carousel.Item>
              {/* <Carousel.Item style={carrStyle} >
                <Image src={data.galeria[1].img} style={imgStyle} />
                <Carousel.Caption>
                  <h1 className="text-uppercase">hacé <span className="font-weight-bold"> teatro </span></h1>
                </Carousel.Caption>
              </Carousel.Item> */}
              <Carousel.Item style={carrStyle} >
                <Image src={data.galeria[2].img} style={imgStyle} />
                <Carousel.Caption>
                  <h1 className="text-uppercase">hacé <span className="font-weight-bold"> teatro </span></h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={carrStyle} >
                <Image src={data.galeria[3].img} style={imgStyle} />
                <Carousel.Caption>
                  <h1 className="text-uppercase">hacé <span className="font-weight-bold"> teatro </span></h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={carrStyle}>
                <Image src={data.galeria[4].img} style={imgStyle} />
                <Carousel.Caption className="justify-content-center">
                  <h1 className="text-uppercase">hacé <span className="font-weight-bold"> teatro </span></h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={carrStyle} >
                <Image src={data.galeria[5].img} style={imgStyle} />
                <Carousel.Caption className="justify-content-center">
                  <h1 className="text-uppercase">hacé <span className="font-weight-bold"> teatro </span></h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={carrStyle}>
                <Image src={data.galeria[6].img} style={imgStyle} />
                <Carousel.Caption className="justify-content-center">
                  <h1 className="text-uppercase">hacé <span className="font-weight-bold"> teatro </span></h1>
                </Carousel.Caption>
              </Carousel.Item>
              {/* <Carousel.Item style={carrStyle} >
                <Image src={data.galeria[7].img} style={imgStyle} />
                <Carousel.Caption className="justify-content-center">
                  <h1 className="text-uppercase">hacé <span className="font-weight-bold"> teatro </span></h1>
                </Carousel.Caption>
              </Carousel.Item> */}
              <Carousel.Item style={carrStyle} >
                <Image src={data.galeria[8].img} style={imgStyle} />
                <Carousel.Caption className="justify-content-center">
                  <h1 className="text-uppercase">hacé <span className="font-weight-bold"> teatro </span></h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={carrStyle} >
                <Image src={data.galeria[9].img} style={imgStyle} />
                <Carousel.Caption className="justify-content-center">
                  <h1 className="text-uppercase">hacé <span className="font-weight-bold"> teatro </span></h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={carrStyle}>
                <Image src={data.galeria[10].img} style={imgStyle} />
                <Carousel.Caption className="justify-content-center">
                  <h1 className="text-uppercase">hacé <span className="font-weight-bold"> teatro </span></h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={carrStyle} >
                <Image src={data.galeria[11].img} style={imgStyle} />
                <Carousel.Caption className="justify-content-center">
                  <h1 className="text-uppercase">hacé <span className="font-weight-bold"> teatro </span></h1>
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
  maxWidth: "400px",
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
