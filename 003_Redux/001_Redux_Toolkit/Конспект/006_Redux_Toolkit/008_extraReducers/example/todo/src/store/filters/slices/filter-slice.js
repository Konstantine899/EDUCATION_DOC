import { createSlice } from "@reduxjs/toolkit";
import { actionResetToDefaults } from "../../todo/actions/action-resetToDefaults";

const filterSlice = createSlice({
  name: "filter",
  initialState: "all",
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    return builder.addCase(actionResetToDefaults, () => {
      return "all";
    });
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
