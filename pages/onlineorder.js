import React from 'react';
import Head from 'next/head';
import { Container, Badge } from 'react-bootstrap';
import  Logo  from '../components/Icons/Logo';
import styles from '../styles/OnlineOrder.module.css';

const OnlineOrder = () => {
  return (
    <>
     <Head>
    <title>Antidote | Order Online</title>
        <meta
          name='description'
          content='Our colorful handmade dim sum , hand pulled noodles are all created by our skillful chefs who were trained in Shanghai.'
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
          marginBottom: '5%',
          marginTop: '5%',
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
      {/* <h1 style={{marginTop:'55px'}}>Coming Soon</h1>
      <h3 style={{marginBottom:'105px', textAlign:'center'}}>Stay tuned through our social media outlets for upcoming updates.</h3> */}
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
        <h3>Order Online</h3>
        <p>Delivery & Pick-up options available</p>
        <p>Please call us for further inquiries</p>
        <p>(917) 261-5963</p>
      </Container>
      <hr
        width='100%'
        style={{
          marginTop: '0%',
          boxShadow: '1px 2px 3px #888888',
          color: '#888888',
        }}
      />

      <Container
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          marginBottom: '5%',
          marginTop: '0%',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {/* <h3>
          <Badge bg='secondary'>
            <a
              className={styles.deliveryLinks}
              target='_blank'
              href='https://get.chownow.com/'
              rel='noreferrer'
            >
              ChowNow
            </a>
          </Badge>
        </h3> */}
        <h3>
          <Badge bg='secondary'>
            <a
              className={styles.deliveryLinks}
              target='_blank'
              href='https://www.ubereats.com/store/antidote/yAx6Z3gKWG2VNOfue2VCjA?utm_source=google&utm_medium=organic&utm_campaign=place-action-link'
              rel='noreferrer'
            >
              Uber Eats
            </a>
          </Badge>
        </h3>
        <h3>
          <Badge bg='secondary'>
            <a
              className={styles.deliveryLinks}
              target='_blank'
              href='https://www.grubhub.com/restaurant/antidote-66-s-2nd-st-brooklyn/3179635?utm_source=google&utm_medium=organic&utm_campaign=place-action-link'
              rel='noreferrer'
            >
              GrubHub
            </a>
          </Badge>
        </h3>
        <h3>
          <Badge bg='secondary'>
            <a
              className={styles.deliveryLinks}
              target='_blank'
              href='https://www.doordash.com/store/antidote-williamsburg-22965400/?utm_campaign=gpa'
              rel='noreferrer'
            >
              DoorDash
            </a>
          </Badge>
        </h3>
      </Container>
    </Container>
    </>
  );
};

export default OnlineOrder;
