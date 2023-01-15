import { createSlice } from "@reduxjs/toolkit";

export const login = createSlice({
  name: "login",
  initialState: [{ user: "admin", email: "admin@admin.ma", pass: "admin" }],
  reducers: {
    addacc: (state, action) => {
      state.push(action.payload)
    }
  },
});

export const { addacc } = login.actions
export default login.reducer

