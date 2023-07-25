import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import DataContext from '../../context/DataContext'
const ExpenseList = () => {
    const {expense} = useContext(DataContext)
  return (
    expense.map((expense)=>{
        return  <ExpenseItem key={expense.id} expense = {expense}/>})
  )
}

export default ExpenseList