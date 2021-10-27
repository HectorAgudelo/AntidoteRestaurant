import React from 'react';
import {Navbar, Stack } from 'react-bootstrap';
import './style.css';

export const BasicContact = () => {
  return (

      <Navbar  className= 'background' expand='lg' sticky="bottom" style={{boxShadow: '5px 0px 15px 5px #888888' }} >
        <Stack
          gap={1}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px 0px 10px 0px'
          }}
        >
          <h4>Williamsburg, Brooklyn</h4>
          <p>401 Street, Brooklyn, NY</p>
          <p>+1 (347)543-456</p>
          <p>Monday-Sunday</p>
          <p>12:00pm-3:00pm</p>
          <p>5:30pm-10:00pm</p>
        </Stack>
      </Navbar>

  );
};
