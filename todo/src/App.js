import React, { useReducer, useState } from "react";
import { todoReducer, initialTodoState } from "./reducers/todoReducer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
  const [newTodoText, setNewTodoText] = useState("");

  const onInputChange = e => {
    setNewTodoText(e.target.value);
  };

  const onToggleCompleted = id => {
    dispatch({
      type: "TOGGLE_TODO",
      // i need to send id data thru payload to tell reducer which todo to toggle!
      payload: id
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
    <div className="ui container">
      <h1>My Todo App</h1>
      {todoState.map(todo => {
        return (
          <div key={todo.id}>
            <p>{todo.item}</p>
            <button onClick={onToggleCompleted}>Completed</button>
          </div>
        );
      })}

      <form onSubmit={onFormSubmit}>
        <input type="text" value={newTodoText} onChange={onInputChange} />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default App;
