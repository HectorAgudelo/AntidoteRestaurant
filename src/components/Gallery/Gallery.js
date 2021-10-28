import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { Logo } from '../Icons/Logo';
import img1 from '../../image/Resized_20170311_125638.jpg';
import img3 from '../../image/Resized_20170310_154440.jpg';
import img4 from '../../image/Resized_20170311_172623.jpg';

export const Gallery = () => {
  return (
    <Container
    style={{
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Container
      style={{
        display: 'flex',
        marginBottom: '3%',
        marginTop: '3%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Logo
        color=''
        height='150pt'
        width='150pt'
        viewBox='0 0 1023.000000 1024.000000'
      />
    </Container>
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '5%',
        marginTop: '0%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h3>Gallery</h3>
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
  </Container>


  
       
 
  );
};
