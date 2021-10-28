import React from 'react';
import { Container, Badge } from 'react-bootstrap';
import { Logo } from '../Icons/Logo';
import './style.css';

export const OnlineOrder = () => {
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
        <h3>
          <Badge bg='secondary'>
            <a target='_blank' href='https://get.chownow.com/' rel='noreferrer'>
              ChowNow
            </a>
          </Badge>
        </h3>
        <h3>
          <Badge bg='secondary'>
            <a
              target='_blank'
              href='https://www.ubereats.com/'
              rel='noreferrer'
            >
              Uber Eats
            </a>
          </Badge>
        </h3>
        <h3>
          <Badge bg='secondary'>
            <a
              target='_blank'
              href='https://www.seamless.com/'
              rel='noreferrer'
            >
              Seamless
            </a>
          </Badge>
        </h3>
        <h3>
          <Badge bg='secondary'>
            <a
              target='_blank'
              href='https://www.doordash.com/'
              rel='noreferrer'
            >
              DoorDash
            </a>
          </Badge>
        </h3>
      </Container>
    </Container>
  );
};
