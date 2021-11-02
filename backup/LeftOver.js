import React from 'react';
import './LeftOver.css';

export const LeftOver = (props) => {
  return (
    <div className='leftover'>
      Amount Left: {props.leftover[0].leftover} Sats
    </div>
  )
}
