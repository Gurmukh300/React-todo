import React, {useState} from 'react';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseList from '../ExpenseList/ExpenseList';
import './Expense.css';
import Card from '../UI/Card';
import ExpenseChart from './ExpensesChart';


const Expense = (props) => {
    const [seletedDate, setSeletedDate] = useState('2022')
    const selectHandler = seletedYear => {
        setSeletedDate(seletedYear)
    }
    const filteredExpenses = props.items.filter((expense )=> {
        return expense.date.getFullYear().toString() === seletedDate;
    });

    

    return (
        <Card className='expenses'>
            <ExpenseFilter seleted={seletedDate} onChangeFilter={selectHandler} />
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpenseList items={filteredExpenses}/>
            
        </Card>
    )
};

export default Expense;