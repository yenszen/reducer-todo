import React, { useReducer } from "react";
import { todoReducer, initialTodoState } from "./reducers/todoReducer";

function App() {
  const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
  // console.log(todoState);

  return (
    <div className="ui container">
      <div className="ui checkbox">
        <input type="checkbox" name="example" />
        <label>{todoState.item}</label>
      </div>
    </div>
  );
}

export default App;
