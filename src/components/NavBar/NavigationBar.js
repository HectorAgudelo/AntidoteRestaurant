import React, { useState } from 'react';
import { Navbar, Container, Nav, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Logo } from '../Icons/Logo';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

export const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto' style={{ alignItems: 'center' }}>
            <Nav.Link href='#features'>About</Nav.Link>
            <Nav.Link href='#pricing'>Menu</Nav.Link>
            <Nav.Link href='#pricing'>Reservations</Nav.Link>
            <Nav.Link href='#pricing'>Order Online</Nav.Link>
            <Nav.Link href='#pricing'>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Stack direction='horizontal' gap={4} className="justify-content-center" >
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
