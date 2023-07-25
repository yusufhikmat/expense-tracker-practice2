import React,{useState} from 'react'
import NewExpenseForm from './NewExpenseForm';
import './AddNewExpense.css'

const AddNewExpense = () => {
   const [open, setOpen] = useState(false);
  return (
    <div className='new-expense'>
       <button onClick={()=>setOpen(true)}>Add New Expense</button>
       {open && <NewExpenseForm setOpen={setOpen} />}
    </div>
  )
}

export default AddNewExpense