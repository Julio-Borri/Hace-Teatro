import React from 'react'
import styled from 'styled-components'


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
    font-family: 'Caveat', cursive;
    color: rgb(225, 111, 34);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 8vmin;
    text-shadow: 2px 2px black;    
`



