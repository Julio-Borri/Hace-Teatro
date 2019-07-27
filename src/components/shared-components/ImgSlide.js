import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export default function ImgSlide(props) {
  return (
    <Carousel.Item>
      <Image
        className="d-block w100"
        src={props.img}
      />
    </Carousel.Item>
  )
}

const imgStyle = {
  flex: "1",
  minWidth: "200px",
}