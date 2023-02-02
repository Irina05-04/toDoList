import React from 'react';
import { Provider } from 'react-redux'
import TodoList from './components/TodoList';
import store from './store';

//import './App.css';
import './style/style.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList />
      </Provider>

    </div>
  );
}

export default App;
