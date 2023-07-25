import React from 'react'
import './ExpenseItem.css';
import { format, parseISO } from "date-fns"; 

const ExpenseItem = ({expense}) => {
console.log(expense)
  return (
    <div className='expense-item'>
        <div className='expense-item__date'>{format(new Date(expense.date), "dd MMMM yyyy")}</div>
        <div className='expense-item__description'>
          <h2>{expense.title}</h2>
            <div className='expense-item__price'>$ {expense.amount}</div>
        </div>
    </div>
  )
}

export default ExpenseItem