import React from 'react';
import Head from 'next/head';
import { Container, Badge } from 'react-bootstrap';
import  Logo  from '../components/Icons/Logo';
import  {RiReservedFill}  from 'react-icons/ri';
import styles from '../styles/Reservation.module.css';

 const Reservation = () => {
  return (
    <>
     <Head>
    <title>Antidote | Reservations</title>
        <meta
          name='description'
          content='Antidote - restaurant and Bar welcomes you at our Williamsburg home : 66 S 2nd street. 
          At Antidote, we believe in continuous relationship between delicious food and life’s moments of enjoyment.'
        />
        <meta
          name='keywords'
          content='Antidote, restaurant, asian, chinese, spicy, food, beer, wine, cocktails, sour, dishes, brooklyn, williamsburg, new york, service, tables, indoor, outdoor, kitchen, dining, lunch, brunch, dinner, reservations, takeout, pick up'
        />
    </Head>
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
        <h3>Reservations</h3>
        <h6 className={styles.text}>
          WE ACCEPT RESERVATIONS FOR PARTIES OF ALL SIZES, UP TO A MONTH IN
          ADVANCE.
        </h6>
        <p>Monday-Sunday 11:30am - 10:00pm</p>
        <p>*holiday hours may vary</p>
        <p className={styles.text}>
          Please call or email us for larger parties or special event requests
        </p>
        <p>(718) 782-2585</p>
        <a id={styles.externalLink} className={styles.mail} href='mailto:antidote@info.com'>
          antidote@info.com
        </a>
        <Container
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '0%',
            marginTop: '1%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3>
            <Badge bg='secondary' style={{ fontSize: '18px' }}>
              <RiReservedFill style={{ marginRight: '5px' }} />
              <a
                id={styles.externalLink}
                target='_blank'
                href='https://www.exploretock.com/antidotebk?tock_source=tock&tock_medium=search_nav'
                rel='noreferrer'
              >
                Book a Table
              </a>
            </Badge>
          </h3>
        </Container>
      </Container>
    </Container>
    </>
  );
};

export default Reservation;
