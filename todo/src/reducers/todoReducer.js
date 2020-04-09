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
      return [...state, { item: action.payload }];
    case "CLEAR_COMPLETED":
      return; // use array method to check condition of completed, then deleting those
    default:
      return state;
  }
};
