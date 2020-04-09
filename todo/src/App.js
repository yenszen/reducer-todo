import React, { useReducer, useState } from "react";
import { todoReducer, initialTodoState } from "./reducers/todoReducer";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import "./App.css";

function App() {
  const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
  const [newTodoText, setNewTodoText] = useState("");

  const onInputChange = e => {
    setNewTodoText(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: { item: newTodoText, completed: false, id: uuidv4() }
    });
    setNewTodoText("");
  };

  const onToggleCompleted = todo => {
    return dispatch({
      type: "TOGGLE_TODO",
      payload: todo.id
    });
  };

  const onClearCompleted = e => {
    e.preventDefault();
    return dispatch({
      type: "CLEAR_COMPLETED"
    });
  };

  return (
    console.log(todoState),
    (
      <div className="ui container">
        <h1>My Todo App</h1>

        <form className="ui mini form" onSubmit={onFormSubmit}>
          <div className="inline field">
            <input
              className="six wide field"
              type="text"
              value={newTodoText}
              onChange={onInputChange}
            />
            <button className="mini ui positive basic button" type="submit">
              Add Todo
            </button>
            <button
              className="mini ui negative basic button"
              onClick={onClearCompleted}
            >
              Remove Completed
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
                {todo.completed ? <p>Completed {moment().format("MMM Do, h:mmA")}</p> : <p></p>}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}

export default App;
