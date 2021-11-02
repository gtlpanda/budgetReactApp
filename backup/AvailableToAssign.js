import React from 'react';

import './AvailableToAssign.css';

export const AvailableToAssign = (props) => {
  return (
    <div className='available col-sm'>
      Amount to assign: {props.availableToAssign[0].amountLeft} Sats
    </div>
  )
}
