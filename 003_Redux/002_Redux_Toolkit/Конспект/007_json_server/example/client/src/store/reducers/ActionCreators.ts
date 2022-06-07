//src/store/reducers/ActionCreators.ts
import axios from "axios";
import { IUser } from "../../models/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thukAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        `https://jsonplaceholder.typicode.com/users`
      );
      return response.data;
    } catch (error: any) {
      return thukAPI.rejectWithValue(error.message);
    }
  }
);
