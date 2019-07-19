import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';


export default function BotonesGrupo(props) {
  return (
    <Container fluid className="bg-secondary d-flex justify-content-end p-1">
      <ButtonGroup size="sm" aria-label="Basic example">
        <Button variant="secondary" href={props.item1.enlace}>{props.item1.name}</Button>
        <Button variant="secondary" href={props.item2.enlace}>{props.item2.name}</Button>
        <Button variant="secondary" href={props.item3.enlace}>{props.item3.name}</Button>
      </ButtonGroup>
    </Container>
  )
}


