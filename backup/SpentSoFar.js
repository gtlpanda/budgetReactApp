import React from 'react';
import './SpentSoFar.css';

export const SpentSoFar = (props) => {
  return (
    <div className='leftover'>
      Amount Left: {props.spent[0].spent} Sats
    </div>
  )
}
