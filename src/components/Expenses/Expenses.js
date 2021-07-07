import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Cards';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');
  
  const addFilterByYear = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(props.items)
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

      return (
        <div>
          <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={addFilterByYear} />
            
            {filteredExpenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
              />
              ))};
          </Card>
        </div>
      );
}
export default Expenses;