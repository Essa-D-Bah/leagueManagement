import React from 'react';
import './sidebar.css';
import {
  Dashboard,
  Person,
  Settings,
  Shop,
  LocalShipping,
  BarChart,
  Notifications,
  SettingsSystemDaydream,
  Psychology,
  CreditCard,
  PersonOutlined,
  Logout,
  DarkMode,
  LightMode
} from '@mui/icons-material';
export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='log'>Essa</span>
      </div>
      <div className='center'>
        <ul>
          <li>
            <Dashboard />
            <span>Dashboard</span>
          </li>
          <li>
            <Person />
            <span>Users</span>
          </li>
          <li>
            <Shop />
            <span>Products</span>
          </li>
          <li>
            <CreditCard />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping />
            <span>Delivery</span>
          </li>
          <li>
            <BarChart />
            <span>Stats</span>
          </li>
          <li>
            <Notifications />
            <span>Notification</span>
          </li>
          <li>
            <SettingsSystemDaydream />
            <span>System Health</span>
          </li>
          <li>
            <Psychology />
            <span>Logs</span>
          </li>
          <li>
            <Settings />
            <span>Settings</span>
          </li>
          <li>
            <PersonOutlined />
            <span>Profile</span>
          </li>
          <li>
            <Logout />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <ul>
          <li>
            <DarkMode/>
          </li>
          <li>
            <LightMode/>
          </li>
        </ul>
      </div>
    </div>
  );
}
