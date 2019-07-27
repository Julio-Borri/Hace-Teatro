import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CardIcono(props) {
  return (
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
