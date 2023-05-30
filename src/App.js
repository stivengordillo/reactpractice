
import { TodoCounter }      from "./components/TodoCounter";
import { TodoSearch }       from "./components/TodoSearch";
import { TodoList }         from "./components/TodoList";
import { TodoItem }         from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import React
 from "react";
function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={1} total={5} />
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}


export default App;
