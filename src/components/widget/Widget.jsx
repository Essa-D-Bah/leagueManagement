import React from 'react';
import './widget.css';
import {
  AccountBalanceWalletOutlined,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  Person2Outlined,
  ShoppingCartOutlined,
} from '@mui/icons-material';

export default function Widget({ type }) {
  let data = {};

  switch (type) {
    case 'users':
      data = {
        title: 'users',
        counter: '3435',
        link: 'see all users',
        icon: <Person2Outlined />,
        style: {
          color: 'yellow',
          backgroundColor:"lightblue"
        },
      };
      break;
    case 'order':
      data = {
        title: 'Orders',
        isMoney: false,
        link: 'see all orders',
        icon: <ShoppingCartOutlined />,
        style: {
          color: 'green',
          backgroundColor: 'lightblue',
        },
      };
      break;
    case 'earnings':
      data = {
        title: 'earnings',
        isMoney: true,
        link: 'view net earnings',
        icon: <MonetizationOnOutlined />,
        style: {
          color: 'blue',
          backgroundColor: 'lightblue',
        },
      };
      break;
    case 'balance':
      data = {
        title: 'balance',
        isMoney: true,
        link: 'see details',
        icon: <AccountBalanceWalletOutlined />,
        style: {
          color: 'purple',
          backgroundColor: 'lightblue',
        },
      };
      break;

    default:
      break;
  }

  return (
    <div className='widget'>
      <div className='left'>
        <p className='title'>{data.title}</p>
        <p className='counter'>{data.isMoney && '$'} 34456</p>
        <p className='link'>{data.link}</p>
      </div>
      <div className='right'>
        <div className='percent positive'>
          <KeyboardArrowUp />
          20%
        </div>
        <div style={data.style} className="icon">{data.icon}</div>
      </div>
    </div>
  );
}
