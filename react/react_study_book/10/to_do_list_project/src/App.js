import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate/TodoTemplate';
import TodoInsert from './components/TodoInsert/TodoInsert';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트',
      checked: true,
    },
    {
      id: 3,
      text: '일정관리앱',
      checked: false,
    }
  ])
  return <TodoTemplate>
    <TodoInsert />
    <TodoList todos={todos} />
  </TodoTemplate>
}

export default App;
