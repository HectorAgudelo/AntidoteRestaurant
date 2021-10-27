import React from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import img1 from '../../image/Resized_20170311_125638.jpg';
import img3 from '../../image/Resized_20170310_154440.jpg';
import img4 from '../../image/Resized_20170311_172623.jpg';

export const Gallery = () => {
  return (
    <Container
      style={{
        flexDirection: 'row',
        marginTop: '5%',
        marginBottom: '5%'
      }}
    >
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Carousel fade style={{ margin: '10px', width: '100%',boxShadow: '5px 10px 15px 5px #888888' }}>
          <Carousel.Item>
            <img className='d-block w-100' src={img1} alt='First slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={img4} alt='Second slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={img3} alt='Third slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src={img4} alt='Fourth slide' />
          </Carousel.Item>
        </Carousel>
      </Container>
      <hr width='100%' style={{marginTop:'10%', boxShadow: '1px 2px 3px #888888', color: '#888888'}} />
    </Container>
  );
};
