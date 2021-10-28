import React, { useState } from 'react';
import { Navbar, Container, Nav, Stack } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Logo } from '../Icons/Logo';
import NavBackGround from '../../image/micro_carbon.png';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import './NavigationBar.css';

export const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      style={{
        backgroundImage: `url(${NavBackGround})`,
        boxShadow: '5px 5px 20px #888888',
      }}
    >
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand >
            <Logo
              color='#fff'
              width='80.000000pt'
              height='80.000000pt'
              viewBox='0 0 1023.000000 1024.000000'
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto' style={{ alignItems: 'center' }}>
            <LinkContainer to='/gallery'>
              <Nav.Link className='items'>
                Gallery
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/menu'>
              <Nav.Link className='items'>
                Menu
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/reservations'>
              <Nav.Link className='items'>
                Reservations
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/order-online'>
              <Nav.Link className='items' >
                Order Online
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav style={{ marginTop: '10px' }}>
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
              <Nav.Link href='#Twitter'>
                <BsTwitter />
              </Nav.Link>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
