import React, { useState } from 'react';
import { Navbar, Container, Nav, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Icons/Logo';
import NavBackGround from '../../image/micro_carbon.png';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import './style.css';

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
        <Navbar.Brand href='#home'>
          <Logo
            color='#fff'
            width='80.000000pt'
            height='80.000000pt'
            viewBox='0 0 1023.000000 1024.000000'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto' style={{ alignItems: 'center' }}>
            <Nav.Link className='items' href='#Gallery'>
              Gallery
            </Nav.Link>
            <Nav.Link className='items' href='#Menu'>
              Menu
            </Nav.Link>
            <Nav.Link className='items' href='#Reservations'>
              Reservations
            </Nav.Link>
            <Nav.Link className='items' href='#Order Online'>
              Order Online
            </Nav.Link>
            <Nav.Link className='items' href='#Contact Us'>
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav style={{ marginTop: '10px' }}>
            <Stack
              direction='horizontal'
              gap={4}
              className='justify-content-center'
            >
              <Nav.Link href='#Facebook'>
                <BsFacebook />
              </Nav.Link>
              <Nav.Link href='#Instagram'>
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
