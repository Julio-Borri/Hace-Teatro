import React from 'react'
import Nav from 'react-bootstrap/Nav'

export default function LinkItem(props) {
    return (
        <Nav.Link href={props.item.enlace}>
            {props.item.name}
        </Nav.Link>
    )
}

