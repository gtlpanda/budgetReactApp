import React from 'react';
import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';

export const NewExpense = () => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
  };


  // onSaveExpenseData is a value that is a function aka when user saves entered expense data
  return (
    <div>
      <form className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
      </form>
    </div>
  )
}
