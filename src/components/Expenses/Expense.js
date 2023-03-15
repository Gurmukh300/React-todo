import React, {useState} from 'react';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

import './Expense.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const Expense = (props) => {
    const [seletedDate, setSeletedDate] = useState('2020')
    const selectHandler = seletedYear => {
        setSeletedDate(seletedYear)
    }

    return (
        <div>
        <Card className='expenses'>
            <ExpenseFilter seleted={seletedDate} onChangeFilter={selectHandler} />

            {props.expenses.map(expense => <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}>
            </ExpenseItem>)}
        </Card>
        </div>
    )
};

export default Expense;