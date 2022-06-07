//src/store/todo/slices/todo-slice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { actionResetToDefaults } from "../Reset/action-resetToDefaults";

const initialState = {
  entities: [],
  loading: "idle", //loading
  error: null,
};

//Набор Thunk actions
export const createTodo = createAsyncThunk(
  "@@entities/create-todo",
  async (title) => {
    return await fetch("http://localhost:3000/entities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //Сериализую данные для передачи
      body: JSON.stringify({ title, completed: false }),
    })
      .then((response) => response.json())
      .then((data) => data);
  }
);

const todoSlice = createSlice({
  name: "@@todo",
  initialState,
  reducers: {
    toggleTodo: (state, action) => {
      const entity = state.entities.find(
        (entity) => entity.id === action.payload
      );
      //и просто мутирую
      entity.completed = !entity.completed;
    },
    removeTodo: (state, action) => {
      const id = state.entities.findIndex(
        (entity) => entity.id === action.payload
      );

      state.entities.splice(id, 1);
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(actionResetToDefaults, (state, action) => {
        return initialState.entities;
      })
      .addCase(createTodo.pending, (state, action) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(createTodo.rejected, (state) => {
        state.loading = "idle";
        state.error = "Something went wrong"; // простейший вариант
      })
      .addCase(
        createTodo.fulfilled,
        (state, action) => void state.entities.push(action.payload)
      );
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
