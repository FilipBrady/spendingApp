import React from 'react';
import logo from './logo.svg';
import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AddExpense from './components/AddExpense';
import SpendingSummary from './components/SpendingSummary';
import SpecificMonthSummary from './components/SpecificMonthSummary';
import ExpenseInfo from './components/ExpenseInfo';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      {/* <AddExpense /> */}
      {/* <SpendingSummary /> */}
      {/* <SpecificMonthSummary /> */}
      {/* <ExpenseInfo /> */}
    </div>
  );
}

export default App;
