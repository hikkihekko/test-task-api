import {configureStore } from "@reduxjs/toolkit";
import stocksReduser from './toolkitSlice';
  
const store = configureStore({
    reducer: {
      values: stocksReduser,
    },
  });

  export {store}