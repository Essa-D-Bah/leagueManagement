import React from 'react';
import './home.css';
import SideBar from '../../components/sidebar/SideBar';
import NavBar from '../../components/navbar/NavBar';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
export default function Home() {
  return (
    <div className='home'>
      <SideBar />
      <div className='homeContainer'>
        <NavBar />
        <div className='widgets'>
          <Widget type='users' />
          <Widget type='order' />
          <Widget type='earnings' />
          <Widget type='balance' />
        </div>

        <div className='charts'>
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
}
