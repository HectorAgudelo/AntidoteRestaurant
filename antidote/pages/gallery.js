import React from 'react';
import { Container, Carousel} from 'react-bootstrap';
import  Logo  from '../components/Icons/Logo';
import Image from 'next/image'


const Gallery = () => {
  return (
    <>
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
        <Carousel
          fade
          style={{
            margin: '10px',
            width: '100%',
            boxShadow: '5px 10px 15px 5px #888888',
          }}
        >
          <Carousel.Item>
            <Image
            layout='responsive'
              src='/dinningArea.jpg'
              alt='First slide'
            
              width={912} height={512}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
           layout='responsive'
              src='/skyView.jpg'
              alt='Second slide'
            
              width={912} height={512}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
            layout='responsive'
              src='/circlePlants.jpg'
              alt='Third slide'
          
              width={912} height={512}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
             layout='responsive'
              src='/table.jpg'
              alt='Fourth slide'
           
              width={912} height={512}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
           layout='responsive'
              src='/circlePlants.jpg'
              alt='Fifth slide'
            
              width={912} height={512}
            />
          </Carousel.Item>
        </Carousel> 
      </Container>
    </Container>
    </>
  );
};

export default Gallery;


