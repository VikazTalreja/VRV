import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
  name: "role",
  initialState: {
    role: "Admin",
    isLoading: false,
    error: null,
  },
  reducers: {
    switchRoleStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    switchRoleSuccess: (state, action) => {
      state.role = action.payload;
      state.isLoading = false;
    },
    switchRoleFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { switchRoleStart, switchRoleSuccess, switchRoleFailure } =
  roleSlice.actions;

export default roleSlice.reducer;
