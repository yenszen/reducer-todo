export const initialTodoState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, item: action.payload };
    case "TOGGLE_TODO":
      return { ...state, completed: !state.completed };
    case "CLEAR_COMPLETED":
      return; // use array method to check condition of completed, then deleting those
    default:
      return state;
  }
};
