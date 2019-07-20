import React from 'react'
import Card from 'react-bootstrap/Card';


export default function CardDark(props) {
  return (
    <Card bg="dark" text="white">
      <Card.Header className="font-weight-bold">{props.taller.titulo}</Card.Header>
      <Card.Img variant="top" src={props.taller.img} style={imgCard}/>
      <Card.Body>
        <Card.Text>          
            <span style={{display: props.taller.horario1 ? "block" : "none"}}>{props.taller.horario1}</span>
            <span style={{display: props.taller.horario2 ? "block" : "none"}}>{props.taller.horario2}</span>
            <span style={{display: props.taller.horario3 ? "block" : "none"}}>{props.taller.horario3}</span>
            <span style={{display: props.taller.horario4 ? "block" : "none"}}>{props.taller.horario4}</span>                  
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

const imgCard = {
  height: "40vh",
  objectFit: "cover",
}
