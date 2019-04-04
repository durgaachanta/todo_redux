import React, { Component } from 'react';
import 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import TodoParent from './container/TodoParent';
import EditTodoTask from './component/EditTodoTask';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={TodoParent} />
          <Route path="/edit/:id" component={EditTodoTask} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
