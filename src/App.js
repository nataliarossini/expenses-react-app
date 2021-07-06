import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 294.12,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e3',
      title: 'Now TV',
      amount: 100,
      date: new Date(2019, 3, 2)
    }
  ]
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>

  )
}

export default App;
