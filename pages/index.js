import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Logo from '../components/Icons/Logo';
import styles from '../styles/LandingPage.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Antidote | Home</title>
        <meta
          name='description'
          content='ANTIDOTE IS A OLACE WHERE THE FOOD IS DESIGNED IN Order to please all palates. Our menu is a combination of sophisticated authentic Chinese cuisine.'
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
        <Container
          style={{
            display: 'flex',
            marginBottom: '5%',
            marginTop: '0%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p className='text-break' id={styles.text}>
            <span style={{ fontWeight: 'bold' }}>Antidote</span> - restaurant and bar welcomes you to our Williamsburg home 66 S 2nd street. 

At Antidote we believe that delicious food is a key factor to the enjoyment of life. Antidote is a place where the food is designed to please all palates. 

Our menu is a combination of sophisticated & authentic Chinese cuisine. All of our ingredients are sourced as locally as possible based on the season. Our special Sichuan and Shanghai style cuisine will offer you the most innovative and delicate selections created by our skillful chefs who were trained in Shanghai. 

Your visit to Antidote will be an adventure in to the exploration of great modern Chinese cuisine.
          </p>
        </Container>
        {/* <h1 style={{ marginTop: '55px' }}>Coming Soon</h1>
        <h3 style={{ marginBottom: '105px', textAlign: 'center' }}>
          Stay tuned through our social media outlets for upcoming updates.
        </h3> */}
      </Container>
    </>
  );
}
