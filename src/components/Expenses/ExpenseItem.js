import React,{ useState } from 'react';

import './ExpenseItem.css';
import {ExpenseDate} from '../Expenses/ExpenseDate';
import {Card} from '../UI/Card';

export const ExpenseItem = (props) => {
  // within the () we set an initial value for the state to use
  // @params - returns array with two values, basically a getter setter function
  const [ title, setTitle ] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change state</button>
    </Card>
  );
}
