import React, { useState } from 'react';
import { Navbar, Container, Nav, Stack } from 'react-bootstrap';
import Link from 'next/link';
// import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../Icons/Logo';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import styles from '../../styles/NavigationBar.module.css';

export const NavigationBar = () => {
  return (
    <Navbar
      className={styles.background}
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      style={{
        boxShadow: '5px 5px 20px #888888',
      }}
    >
      <Container>
        {/* <Navbar.Brand>
          <Logo
            color='#fff'
            width='80.000000pt'
            height='80.000000pt'
            viewBox='0 0 1023.000000 1024.000000'
          />
        </Navbar.Brand> */}

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto' style={{ alignItems: 'center' }}>
            <Link href='/' passHref>
              <Nav.Link className={styles.items}>Home</Nav.Link>
            </Link>
            <Link href='/gallery' passHref>
              <Nav.Link className={styles.items}>Gallery</Nav.Link>
            </Link>
            <Link href='/menu' passHref>
              <Nav.Link className={styles.items}>Menu</Nav.Link>
            </Link>
            <Link href='/reservation' passHref>
              <Nav.Link className={styles.items}>Reservations</Nav.Link>
            </Link>
            <Link href='/onlineorder' passHref>
              <Nav.Link className={styles.items}>Order Online</Nav.Link>
            </Link>
          </Nav>
          <Nav style={{ marginTop: '0px' }}>
            <Stack
              direction='horizontal'
              gap={4}
              className='justify-content-center'
            >
              <Nav.Link
                href='https://m.facebook.com/Antidote66/'
                target='_blank'
                rel='noreferrer'
              >
                <BsFacebook />
              </Nav.Link>
              <Nav.Link
                href='https://www.instagram.com/antidote__nyc/'
                target='_blank'
                rel='noreferrer'
              >
                <BsInstagram />
              </Nav.Link>
              {/* <Nav.Link href='#Twitter'>
                <BsTwitter />
              </Nav.Link> */}
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
