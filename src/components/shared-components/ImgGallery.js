import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

export default function ImgGallery(props) {
  return (
    <Card className="my-2">
      <Image src={props.item.img} thumbnail />
    </Card>
  )
}
