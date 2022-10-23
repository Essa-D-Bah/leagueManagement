import React from 'react';
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './chart.css';

export default function Chart() {
  const data = [
    {
      name: 'Jan',
      total: 2000,
    },
    {
      name: 'Feb',
      total: 600,
    },
    {
      name: 'Mar',
      total: 1300,
    },
    {
      name: 'Apr',
      total: 500,
    },
    {
      name: 'May',
      total: 1000,
    },
    {
      name: 'Jun',
      total: 1200,
    },
  ];
  return (
    <div className='chart'>
      <div className='cTitle'>Last 6 Months (Revenue)</div>
      <ResponsiveContainer width={'100%'} height={400}>
        <AreaChart width={730} height={400} data={data}>
          <defs>
            <linearGradient id='total' x1={0} y1='0' x2={0} y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' stroke='gray' />
          <YAxis />
          <CartesianGrid strokeDasharray={'3 3'} />
          <Tooltip  stroke="gray"/>
          <Area
            type='monotone'
            dataKey='total'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#total)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
