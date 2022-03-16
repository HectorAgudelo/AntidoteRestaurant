import Head from 'next/head';
import { Container, Carousel } from 'react-bootstrap';
import Logo from '../components/Icons/Logo';
import Image from 'next/image';

export default function Menu() {
  return (
    <>
      <Head>
        <title>Antidote | Menu</title>
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
          {/* <h3>Menu</h3> */}
          <Carousel
            variant='dark'
            fade
            style={{
              margin: '10px',
              width: '100%',
              boxShadow: '5px 10px 15px 5px #888888',
            }}
          >
            <Carousel.Item interval={30000}>
              <Image
                layout='responsive'
                src='/menu1.png'
                alt='First slide'
                width={150}
                height={150}
              />
            </Carousel.Item>
            <Carousel.Item interval={30000}>
              <Image
                layout='responsive'
                src='/menu2.png'
                alt='Second slide'
                width={150}
                height={150}
              />
            </Carousel.Item>
            <Carousel.Item interval={30000}>
              <Image
                layout='responsive'
                src='/menu3.png'
                alt='Third slide'
                width={150}
                height={150}
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    </>
  );
}
