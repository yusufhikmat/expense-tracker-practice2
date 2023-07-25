import React, {useContext, useState} from 'react'
import DataContext from '../../context/DataContext';
import { format } from 'date-fns';
import './NewExpenseForm.css'
const NewExpenseForm = ({setOpen}) => {
    const {expense, setExpense} = useContext(DataContext)
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const id= expense.length ? expense[expense.length - 1].id + 1 : 1;
        const formattedDate = format(new Date(date), 'MMMM dd, yyyy pp');
        const newExpense = {
            id, title:title, amount :amount, date:formattedDate
        }
        console.log(newExpense);
        const allExpense = [...expense, newExpense]
        setExpense(allExpense);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor='title'>Title</label>
                <input type="text"
                        name="title"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className='new-expense__control'>
                <label htmlFor='amount'>Amount</label>
                <input type="number"
                        step="0.01"
                        min="0.01"
                        name="amount"
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)}
                />
            </div>
            <div className='new-expense__control'>
                <label htmlFor='date'>Date</label>
                <input type="date"
                        name="date"
                        max="2023-01-12"
                        min="2015-01-01"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                />
            </div>
            <div className='new-expense__actions'>
                <button>Submit</button>
                {/* <button onClick={()=>setOpen(false)}>Cancel</button> */}
            </div>
            </div>
        </form>
    </div>
  )
}

export default NewExpenseForm