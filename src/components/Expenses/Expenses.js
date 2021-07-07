import ExpensesList from './ExpensesList';
import Card from '../UI/Cards';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');
  
  //setting a year when user selects on dropdown
  const addFilterByYear = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(props.items)
  };


  //displaying the expenses of each year
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
      return (
        <li>
          <Card className='expenses'>
            <ExpensesFilter 
              selected={filteredYear} 
              onChangeFilter={addFilterByYear} 
            />
          <ExpensesList items={filteredExpenses}/>
          </Card>
        </li>
      );
}
export default Expenses;