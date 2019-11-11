import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from "./containers/AddTodo";
import VisibleList from "./containers/VisibleList";
import FilterContainer from "./containers/FilterContainer";

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <VisibleList/>
      <FilterContainer/>
    </div>
  );
}

export default App;
