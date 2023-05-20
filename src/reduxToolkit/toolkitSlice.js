  import { createSlice } from '@reduxjs/toolkit';

  const stocksSlice = createSlice({
    name: 'stocks',
    initialState:{
      stocks: [],
      searchStocks:[],
      displayedStocks: [],
      startDisplayedStocksIndex: 0,
      endDisplayedStocksIndex: 10,
    },
    reducers: {
      //create a store for all stocks
      Stocks(state, action) {
        state.stocks = action.payload;
      },
      //create a store for displayed stocks
      doDisplayedStocks(state) {
        state.displayedStocks = state.stocks.slice(state.startDisplayedStocksIndex, state.endDisplayedStocksIndex);
      },
      //change start|end index
      showNextStocks(state) {
        state.startDisplayedStocksIndex += 10;
        state.endDisplayedStocksIndex += 10;
      },
      // change start|end index and check to prevent negative values
      showPreviousStocks(state) {
        state.startDisplayedStocksIndex = Math.max(state.startDisplayedStocksIndex - 10, 0);
        state.endDisplayedStocksIndex = Math.max(state.endDisplayedStocksIndex - 10, 10);
      },
      // Add the relevant stocks obtained to the list, check for an empty string, and update the values for the display state, start index, and end index
      filterStocks(state, action) {
        const searchValue = action.payload.trim();
        if (searchValue === '') {
          state.displayedStocks = state.stocks.slice(state.startDisplayedStocksIndex, state.endDisplayedStocksIndex);
        } else {
          state.searchStocks = state.stocks.filter(stock =>
            stock.symbol.toUpperCase().includes(searchValue.toUpperCase())
          );
          state.startDisplayedStocksIndex = 0;
          state.endDisplayedStocksIndex = 10;
          state.displayedStocks = state.searchStocks.slice(state.startDisplayedStocksIndex, state.endDisplayedStocksIndex);
        }
        doDisplayedStocks(state);
      },      
    },
  });


  export const {Stocks,doDisplayedStocks,showNextStocks,showPreviousStocks,SearchStock,filterStocks,} = stocksSlice.actions;
  export default stocksSlice.reducer;
