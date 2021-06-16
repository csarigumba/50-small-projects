import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isUpdate, setUpdate] = useState(false);
  const [updateIdx, setUpdateIdx] = useState(-1);
  const title = "What's the goal for today?";

  const handleOnChange = e => {
    setTodo(e.target.value);
  };

  const handleOnClick = () => {
    let todosArray = [];
    if (!isUpdate) {
      console.log(`Submitting todo: ${todo}`);
      todosArray = [todo, ...todos];
    } else {
      console.log(`Updating todo: ${todo}`);
      todosArray = [...todos];
      todosArray[updateIdx] = todo;
      setUpdate(false);
    }
    setTodos(todosArray);
    setTodo("");
  };

  const handleDeleteOnclick = todoIdx => {
    console.log(`Deleting element with id: ${todoIdx}`);
    let todosArray = [...todos];
    todosArray.splice(todoIdx, 1);
    setTodos(todosArray);
  };

  const handleEditOnClick = todoIdx => {
    console.log(`Editing element with id: ${todoIdx}`);
    const todo = todos[todoIdx];
    setTodo(todo);
    setUpdate(true);
    setUpdateIdx(todoIdx);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="display-6">{title}</h1>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Add todo.." value={todo} onChange={handleOnChange} />
          <button className="btn btn-success" type="button" id="submit-todo" onClick={handleOnClick}>
            →
          </button>
        </div>
        {todos && (
          <TodoList todos={todos} handleDeleteOnclick={handleDeleteOnclick} handleEditOnClick={handleEditOnClick} />
        )}
      </div>
    </div>
  );
}

export default App;
