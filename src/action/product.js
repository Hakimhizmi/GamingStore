import { createSlice } from "@reduxjs/toolkit";


const initialState = [];



export const product = createSlice({
  name: "product",
  initialState,
  reducers : {
    adddata:(state,action)=>{
        action.payload.map((i)=>{
            state.push(i)
        })
    } ,
    delpro :(state,action)=>{
      state.splice(action.payload,1)
    },
    show : (state,action)=>{
      state[action.payload].sta = ! state[action.payload].sta
    } 
  }
});

export const { adddata,delpro,show } = product.actions

export default product.reducer;
