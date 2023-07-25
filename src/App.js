import './App.css';
import AddNewExpense from './components/addnewExpense/AddNewExpense';
import ExpenseList from './components/expenseItem/ExpenseList';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
    <div className="App">
    <h2>Expense Tracker</h2>
    <AddNewExpense />
    <ExpenseList />
    </div>
    </DataProvider>
  );
}

export default App;
