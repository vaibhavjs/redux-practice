import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Finish Redux Toolkit Theory", completed: false },
  { id: 2, title: "Work on Capstone Project", completed: true },
  { id: 3, title: "Submit Leetcode weekly challenge", completed: true },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(), //Nice way to get unique ID
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },

    deleteTodo: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

const store = configureStore({
  reducer: todoSlice.reducer,
});

export const todoActions = todoSlice.actions;

export default store;
