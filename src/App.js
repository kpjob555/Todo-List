import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Header from './Components/Headers/Header';
import TodoList from './Container/TodoList/Todolist';

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
              <Header />
              <TodoList/> 
          </div>         
          <h4 className="Credit" onClick={() => alert('Version 1.01 Date 24/Sep/2019')} >V. 1.01 BY MJDC</h4>
        </BrowserRouter>
    );
  }
}

export default App;
