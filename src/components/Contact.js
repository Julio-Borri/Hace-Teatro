import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import TitleH1 from './styled components/TitleH1'
import ContactForm from './styled components/ContactForm'
import data from '../Data'

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Container style={contStyle}>
          <Row>
            <TitleH1 title={data.titulos.titulo3} />
          </Row>
          <ContactForm />
        </Container>
      </React.Fragment>
    )
  }
}

const contStyle = {
  marginTop: "100px",
  marginBottom: "150px",
}
