import React, {useState} from 'react';
import NewExpense from "./components/NewExpense/NewExpense"
// import ExpenseFilter from './components/ExpenseFilter/ExpenseFilter';
import Expense from './components/Expenses/Expense';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA)
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      {/* <ExpenseFilter /> */}
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
