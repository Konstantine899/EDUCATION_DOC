//src/store/todo/slices/todo-slice.js
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { actionResetToDefaults } from "../Reset/action-resetToDefaults";

//Получение данных
export const loadTodos = createAsyncThunk(
  "@@todos/load-all",
  async (_, { rejectWithValue, extra }) => {
    try {
      return extra.api.loadTodos();
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(`Наши дроны уже фиксят этот баг`);
    }
  },
  {
    condition: (_, { getState, extra }) => {
      const { loading } = getState().todos;
      //Отменяю повторный запрос
      if (loading === "loading") {
        return false;
      }
    },
  }
);

//Создание todo
export const createTodo = createAsyncThunk(
  "@@todos/create-todo",
  async (title, { rejectWithValue, extra }) => {
    try {
      return extra.api.createTodo(title);
    } catch (error) {
      return rejectWithValue(`Наши дроны уже фиксят этот баг`);
    }
  }
);

// Удаление
export const removeTodo = createAsyncThunk(
  "@@todos/remove-todo",
  //Произвожу действия на сервере и преобразую полученный ответ
  async (id, { rejectWithValue, extra }) => {
    try {
      return extra.api.removeTodo(id);
    } catch (e) {
      return rejectWithValue(`Наши дроны уже фиксят этот баг`);
    }
  }
);

//Обновление
export const toggleTodo = createAsyncThunk(
  "@@todos/toggle-todo",
  async (id, { getState, rejectWithValue, extra }) => {
    try {
      // Получаю нужный объект
      const todo = getState().todos.entities.find((todo) => todo.id === id);
      return extra.api.toggleTodo(id, { completed: !todo.completed });
    } catch (error) {
      return rejectWithValue(`Наши дроны уже фиксят этот баг`);
    }
  }
);

//Адаптеры
const todosAdapter = createEntityAdapter({
  //Связываю с конретным полем id в API
  selectId: (todo) => todo.id,
});

const todoSlice = createSlice({
  name: "@@todos",

  initialState: todosAdapter.getInitialState({
    loading: "idle", //loading
    error: null,
  }),

  reducers: {},
  extraReducers: (builder) => {
    return builder
      .addCase(actionResetToDefaults, (state, action) => {
        state.entities = [];
      })
      .addCase(loadTodos.pending, (state, action) => {
        state.error = null;
      })
      .addCase(loadTodos.rejected, (state) => {
        state.error = "Something went wrong"; // простейший вариант
      })
      .addCase(loadTodos.fulfilled, (state, action) => {
        todosAdapter.addMany(state, action.payload);
        // state.entities = action.payload;
      })
      .addCase(
        createTodo.fulfilled,
        (state, action) => void todosAdapter.addOne(state, action.payload)
      )
      .addCase(removeTodo.fulfilled, (state, action) => {
        //Объект на сервере уже удален,
        //Фильтрую массив в состоянии что бы ит туда удалить этот объект
        state.entities = state.entities.filter(
          (todo) => todo.id !== action.payload
        );
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        //обновленный объект
        const updatedTodo = action.payload;

        //Получаю index объекта
        const index = state.entities.findIndex(
          (todo) => todo.id === updatedTodo.id
        );
        //Заменяю объект
        state.entities[index] = updatedTodo;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          state.loading = "loading";
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          console.log(action);
          state.loading = "idle";
          state.error = action.payload || action.error.message;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state, action) => {
          state.loading = "idle";
        }
      );
  },
});

export const todoSelectors = todosAdapter.getSelectors((state) => state.todos);

export default todoSlice.reducer;
