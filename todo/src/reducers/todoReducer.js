import { v4 as uuidv4 } from "uuid";

export const initialTodoState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: uuidv4()
    }
  ]
};

export const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      };
    case "CLEAR_COMPLETED":
      return { ...state, todos: state.todos.filter(todo => !todo.completed) };
    default:
      return state;
  }
};
