import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import data from '../../data';

export default function CardIcono() {
  return (
    <Container>
      <Row>
        <Col className="fb-ic text-dark fa-2x">
          <i className={data.cardHome[0].icono}></i>
        </Col>
        <Col className="fb-ic text-dark fa-2x">
          <i className={data.cardHome[0].icono}></i>
        </Col>
      </Row>
    </Container>


    <Card className="text-center bg-light">
      <Card.Body>
        <Card.Text className="fb-ic text-dark fa-2x">
          <i className={props.cardHome.icono}></i>
        </Card.Text>
        <Card.Text className="font-weight-bold">
          <h5>{props.cardHome.text}</h5>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
