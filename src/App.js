import {Expenses} from './components/Expenses/Expenses';
import {NewExpense} from './components/Expenses/NewExpense';

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
    },
    {
      id: 4,
      title: "Movies Regal",
      amount: 43.23,
      date: new Date(2021, 9, 29)
    }
  ];


  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/> 
    </div>
  );
}

export default App;
