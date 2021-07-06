import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // }); ---#USE THIS INSTEAD THE ONE BELLOW---

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // }); ---#NOT THE BEST APROACH BUT COULD BE USED---
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });
        
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input 
                    type="text" 
                    onChange={titleChangeHandler} 
                    value={enteredTitle}
                />
            </div>
            <div className="new-expense__control">
                <label>Ammount</label>
                <input 
                    type="number" 
                    min="0.01" 
                    step="0.01" 
                    value={enteredAmount}
                    onChange={amountChangeHandler} 
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input 
                    type="date" 
                    min="2020-01-01" 
                    max="2021-12-31" 
                    onChange={dateChangeHandler}
                    value={enteredDate}
                />
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>

    </form>
}

export default ExpenseForm;