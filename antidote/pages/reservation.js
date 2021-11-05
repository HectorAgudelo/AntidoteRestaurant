import React from 'react';
import { Container, Badge } from 'react-bootstrap';
import  Logo  from '../components/Icons/Logo';
import  {RiReservedFill}  from 'react-icons/ri';
import styles from '../styles/Reservation.module.css';

 const Reservation = () => {
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
                href='https://resy.com/?date=2021-10-27&seats=2'
                rel='noreferrer'
              >
                Book a Table
              </a>
            </Badge>
          </h3>
        </Container>
      </Container>
    </Container>
  );
};

export default Reservation;
