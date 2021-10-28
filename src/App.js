
import {Expenses} from './components/Expenses';

function App() {

  const expenses = [
    {
      id: 1,
      title: 'Rent',
      amount: 700.00,
      date: new Date(2021, 9, 27)
    }, {
      id: 2,
      title: 'Car insurance',
      amount: 300.00,
      date: new Date(2021, 9, 27)
    }, {
      id: 3,
      title: 'Groceries',
      amount: 200.00,
      date: new Date(2021, 9, 27)
    }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/> 
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}/>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}/>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}/> */}
    </div>
  );
}

export default App;
