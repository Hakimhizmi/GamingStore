import { createSlice } from "@reduxjs/toolkit";

export const logswitch = createSlice({
  name: "login",
  initialState: {stat:"",statelogin:""},
  reducers: {
    switchcom: (state, action) => {
      state.stat = action.payload
    },
    sigin:(state,action)=>{
        state.statelogin = action.payload
    }
  },
});

export const { switchcom ,sigin} = logswitch.actions
export default logswitch.reducer

