import React from 'react';
import Head from 'next/head';
import { Container, Carousel} from 'react-bootstrap';
import  Logo  from '../components/Icons/Logo';
import Image from 'next/image'


const Gallery = () => {
  return (
    <>
    <Head>
    <title>Antidote | Gallery</title>
        <meta
          name='description'
          content='Enjoy our beautiful setting, and have a great experience'
        />
        <meta
          name='keywords'
          content='Antidote, restaurant, asian, chinese, spicy, food, beer, wine, cocktails, sour, dishes, brooklyn, williamsburg, new york, service, tables, indoor, outdoor, kitchen, dining, lunch, brunch, dinner, reservations, takeout, pick up'
        />
         <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff'></meta>
    </Head>
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
        {/* bug on some images */}
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
              src='/antidote.jpg'
              alt='First slide'
            
              width={912} height={512}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
           layout='responsive'
              src='/barFront.jpg'
              alt='Second slide'
            
              width={912} height={512}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
            layout='responsive'
              src='/drinkFood.jpeg'
              alt='Third slide'
          
              width={912} height={512}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
             layout='responsive'
              src='/bar.jpg'
              alt='Fourth slide'
           
              width={912} height={512}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
           layout='responsive'
              src='/plants.jpg'
              alt='Fifth slide'
            
              width={912} height={512}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
           layout='responsive'
              src='/cocktails.jpg'
              alt='Sixth slide'
            
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


