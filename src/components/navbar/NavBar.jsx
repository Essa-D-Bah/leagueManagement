import React from 'react';
import './navbar.css';
import {
  Search,
  Language,
  DarkModeOutlined,
  FullscreenExitOutlined,
  NotificationsOutlined,
  MessageOutlined,
  ListAltOutlined,
} from '@mui/icons-material';

export default function NavBar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='search...' />
          <Search />
        </div>
        <div className='items'>
          <div className='item'>
            <Language />
            English
          </div>
          <div className='item'>
            <DarkModeOutlined />
          </div>
          <div className='item'>
            <FullscreenExitOutlined />
          </div>
          <div className='item'>
            <NotificationsOutlined />
            <p className='not'>6</p>
          </div>
          <div className='item'>
            <MessageOutlined />
            <p className='not'>4</p>
          </div>
          <div className='item'>
            <ListAltOutlined />
          </div>
          <div className='item avatar'>
            <img src="head.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
