import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import Logo from '../../image/AntidoteLogo.jpeg';

export const Navigation = () => {
  return (
    <div
      style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor='#fff' backgroundColor='#333'>
        <CDBSidebarHeader prefix={<i className='fa fa-bars fa-large'></i>}>
          <a
            href='/'
            className='text-decoration-none'
            style={{ color: 'inherit' }}
          >
            Antidote
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className='sidebar-content'>
          <CDBSidebarMenu>
            <NavLink exact to='/About' activeClassName='activeClicked'>
              <CDBSidebarMenuItem  icon="fa-regular fa-circle-info fa-lg">
                About
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to='/Menus' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='fa-solid fa-utensils fa-lg'>
                Menus
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to='/Reservations' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='fa-solid fa-address-book fa-lg'>Reservations</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to='/Order' activeClassName='activeClicked'>
              <CDBSidebarMenuItem icon='fa-solid fa-shopping-bag fa-lg'>
                Order online
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className='sidebar-btn-wrapper'
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
