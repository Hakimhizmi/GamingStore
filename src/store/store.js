import { configureStore } from '@reduxjs/toolkit'
import card from '../action/addtocart'
import product from '../action/product'
import login from "../action/login"
import logswitch  from '../action/switch'


export const store = configureStore({
  reducer: {
    shopingcart: card,
    product : product ,
    login : login ,
    logswitch : logswitch ,
  },
})