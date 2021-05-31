import React from 'react'

import Expenses from './componentes/Expense/Expenses'

import NewExpense from './componentes/NewExpense/NewExpense'

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Papel Toalla',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', 
    title: 'Nueva TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12),
    },
    {
      id: 'e3',
      title: 'Seguro de Auto',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Escritorio Nuevo(Madera)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  /*return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, "Let's get started!"),
    React.createElement(Expenses, { items: expenses})
  )*/
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
