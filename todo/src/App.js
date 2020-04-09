import React, { useReducer, useState } from "react";
import { todoReducer, initialTodoState } from "./reducers/todoReducer";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
  const [newTodoText, setNewTodoText] = useState("");

  const onInputChange = e => {
    setNewTodoText(e.target.value);
  };

  const onToggleCompleted = todo => {
    // console.log(todo.id);
    return dispatch({
      type: "TOGGLE_TODO",
      payload: todo.id
    });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: { item: newTodoText, completed: false, id: uuidv4() }
    });
    setNewTodoText("");
  };

  return (
    console.log(todoState),
    (
      <div className="ui container">
        <h1>My Todo App</h1>

        <form className="ui mini form" onSubmit={onFormSubmit}>
          <div className="inline field">
            <input
              className="eight wide field"
              type="text"
              value={newTodoText}
              onChange={onInputChange}
            />
            <button className="mini ui primary basic button" type="submit">
              Add Todo
            </button>
          </div>
        </form>

        {todoState.map(todo => {
          return (
            <div key={todo.id}>
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name="toggleComplete"
                  onClick={() => onToggleCompleted(todo)}
                />
                <label>{todo.item}</label>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}

export default App;
