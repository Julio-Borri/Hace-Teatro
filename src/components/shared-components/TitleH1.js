import React from 'react';
import styled from 'styled-components';


export default function TitleH1(props) {
    return (
        <div className="text-center w-100 my-4">
            <Title>
                {props.title}
            </Title>
        </div>
    )
}

const Title = styled.h1`
  font-size: 55px;
  text-shadow: 2px 2px black;  
  font-weight: 700;
  font-family: 'Caveat', cursive;
  text-transform: uppercase;
  color: ${props => props.inputColor || "rgb(225, 111, 34)"};
  @media screen and (max-width: 992px) {
    font-size: 45px;
  }
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
`

