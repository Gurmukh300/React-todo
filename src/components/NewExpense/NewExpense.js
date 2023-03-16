import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import React, {useState} from 'react';

const NewExpense = (props) => {
    const [newExpense, setNewExpense] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setNewExpense(false)
    }
    const addingHandler = () => {
        setNewExpense(true)
    }

    const stopHandler = () => {
        setNewExpense(false)
    }

    return (
        <div className='new-expense'>
            {!newExpense && <button onClick={addingHandler}>Add More Expense</button>}
            {newExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={stopHandler}/>}
        </div>
    )
}

export default NewExpense;