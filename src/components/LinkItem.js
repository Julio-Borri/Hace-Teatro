import React from 'react';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

export default function LinkItem(props) {
  return (
      <Navi href={props.item.enlace} className="mx-1">
        {props.item.name}
      </Navi>
  )
}

const Navi = styled(Nav.Link)`
  color: white !important;
  border: none;
  font-weight: 700;
  :hover {
    font-weight: 700;
    color: black !important;
  }
`
