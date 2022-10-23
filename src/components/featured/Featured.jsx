import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@mui/icons-material';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';
import './featured.css';

export default function Featured() {
  return (
    <div className='featured'>
      <div className='featuredTop'>
        <h3>Total Revenue</h3>
        <MoreVert />
      </div>
      <div className='featuredCenter'>
        <CircularProgressbar
          value={70}
          text={'70%'}
          strokeWidth={2}
          className='fchart'
        />
        <div className='centerText'>
          <p className='salesText'>Total sales made today</p>
          <p className='salesAmount'>$500</p>
          <p className='desc'>
            Previous transactions processing. Last payment may not be included
          </p>
        </div>
      </div>
      <div className='featuredBottom'>
        <div className='fitem'>
          <p className='itemTitle'>Today</p>
          <div className='itemDetails fpositive'>
            <p>$14.5k</p>
            <KeyboardArrowUp />
          </div>
        </div>

        <div className='fitem'>
          <p className='itemTitle'>Today Week</p>
          <div className='itemDetails fpositive'>
            <p>$20k</p>
            <KeyboardArrowUp />
          </div>
        </div>

        <div className='fitem'>
          <p className='itemTitle'>Last Month</p>
          <div className='itemDetails fnegative'>
            <p>$5k</p>
            <KeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}
