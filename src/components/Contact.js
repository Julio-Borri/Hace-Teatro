import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TitleH1 from './shared-components/TitleH1';
import ContactForm from './shared-components/ContactForm';
import data from '../informacion';

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
  marginBottom: "200px",
}
