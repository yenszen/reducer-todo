import { v4 as uuidv4 } from "uuid";

export const initialTodoState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: uuidv4()
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};
