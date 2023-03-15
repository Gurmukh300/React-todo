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
            <ExpenseFilter seleted={seletedDate} onChangeFilter={selectHandler} />
        <Card className='expenses'>
            <ExpenseItem
            title={props.expenses[0].title}
            amount={props.expenses[0].amount}
            date={props.expenses[0].date}>
            </ExpenseItem>
            <ExpenseItem
            title={props.expenses[1].title}
            amount={props.expenses[1].amount}
            date={props.expenses[1].date}>
            </ExpenseItem>

            <ExpenseItem
            title={props.expenses[2].title}
            amount={props.expenses[2].amount}
            date={props.expenses[2].date}>
            </ExpenseItem>

            <ExpenseItem
            title={props.expenses[3].title}
            amount={props.expenses[3].amount}
            date={props.expenses[3].date}>
            </ExpenseItem>
        </Card>
        </div>
    )
};

export default Expense;