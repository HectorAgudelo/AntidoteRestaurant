import React from 'react';
import { Navbar, Stack } from 'react-bootstrap';
import './style.css';

export const Footer = () => {
  return (
    <Navbar
      className='background'
      expand='lg'
      sticky='bottom'
      style={{ boxShadow: '5px 0px 15px 5px #888888' }}
    >
      <Stack
        gap={1}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '10px 0px 10px 0px',
        }}
      >
        <h4 className="h4">Williamsburg, Brooklyn</h4>
        <p className='p'>66 S 2nd St, Brooklyn, NY 11249</p>
        <p className='p'>(718) 782-2585</p>
        {/* <p className='p'>Monday-Sunday</p>
        <p className='p'>12:00pm-3:00pm</p>
        <p className='p'>5:30pm-10:00pm</p> */}
      </Stack>
    </Navbar>
  );
};
