import React from 'react';
import { Col, } from 'react-bootstrap';
import styled from 'styled-components';

export default function CardDark2(props) {
  return (
    <Col xs={12} md={12} className="text-white text-center font-weight-bold mb-3">
        <div className="mt-3 text-uppercase text-dark"><h3>{props.item.titulo}</h3></div>

      <CardCol className="mb-3 d-flex flex-column justify-content-center" bgImg={props.item.img}>
        <div className="d-flex flex-wrap align-items-center justify-content-center mb-4">
          <StyledH5 className="w-100" style={{ display: props.item.horario1 ? "block" : "none" }} fontSizeHigh="20px" fontSizeMedium="18px" fontSizeSmall="16px" >
            {props.item.horario1}</StyledH5>
          <StyledH5 className="w-100" style={{ display: props.item.horario2 ? "block" : "none" }} fontSizeHigh="20px" fontSizeMedium="18px" fontSizeSmall="16px" >
            {props.item.horario2}</StyledH5>
          <StyledH5 className="w-100" style={{ display: props.item.horario3 ? "block" : "none" }} fontSizeHigh="20px" fontSizeMedium="18px" fontSizeSmall="16px" >
            {props.item.horario3}</StyledH5>
          <StyledH5 className="w-100" style={{ display: props.item.horario4 ? "block" : "none" }} fontSizeHigh="20px" fontSizeMedium="18px" fontSizeSmall="16px" >
            {props.item.horario4}</StyledH5>
        </div>
      </CardCol>
    </Col>
  )
}

const CardCol = styled(Col)`
  background-image: url(${props => props.bgImg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  border-radius: 5px;
  :hover{
    box-shadow: 0 0 6px 0 black;
  }; 
`

export const StyledH5 = styled.h5`
  font-size: ${props => props.fontSizeHigh};
  @media screen and (max-width: 1024px) {
    font-size: ${props => props.fontSizeMedium};
  };
  @media screen and (max-width: 768px) {
    font-size: ${props => props.fontSizeSmall};
  };
`