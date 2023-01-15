import { createSlice } from "@reduxjs/toolkit";

export const card = createSlice({
  name: "addto",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    del: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { add , del} = card.actions
export default card.reducer

