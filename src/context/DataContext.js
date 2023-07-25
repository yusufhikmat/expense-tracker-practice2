import { createContext, useContext, useState } from "react";
import { expenses } from "../components/expenseItem/expenses";

const DataContext = createContext();

export const DataProvider = ({children})=>{
    const [expense, setExpense]= useState(expenses)
    return (
        <DataContext.Provider value={{
            expense, setExpense
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;