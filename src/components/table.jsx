import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Stocks, doDisplayedStocks, showPreviousStocks, showNextStocks } from '../reduxToolkit/toolkitSlice';
import axios from 'axios';
import { Table, TableBody, TableContainer, TableHead, Paper, TableRow, TableCell } from '@mui/material';
import CustomButton from './button';
import {ListRow} from './tableRow';

const StocksTable = () => {

  const allStocks = useSelector(state => state.values.stocks);
  const displayedStocks = useSelector(state => state.values.displayedStocks);
  const startIndex = useSelector(state => state.values.startDisplayedStocksIndex)
  const endIndex = useSelector(state => state.values.endDisplayedStocksIndex)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(
          'https://cloud.iexapis.com/stable/stock/market/list/mostactive',
          {
            params: {
              token: 'your-api-token',
              listLimit: 10000,
            },
          }
        );
  
        const { data } = response;
        dispatch(Stocks(data)); 
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };
  
    fetchStocks();
  }, []);
  

  useEffect(() => {
    if (allStocks.length > 0) {
      dispatch(doDisplayedStocks());
    }
  }, [allStocks, startIndex]);

  return (
    <div>
      <h1>Displayed Stocks:</h1>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
        <TableRow >
          <TableCell component="th" scope="row">
            Name
          </TableCell>
          <TableCell align="right">Open Price</TableCell>
          <TableCell align="right">Close Price</TableCell>
          <TableCell align="right">Change 24h</TableCell>
          <TableCell align="right">Change pracent</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {
          displayedStocks.map((stock) => (<ListRow stock={stock} key={stock.id}/> ))
        }
        </TableBody>
      </Table>
      </TableContainer>
      <CustomButton onClick={() => dispatch(showPreviousStocks())} disabled={startIndex === 0}>
        Previous 10 Stocks
      </CustomButton>
      <CustomButton onClick={() => dispatch(showNextStocks())} disabled={startIndex + 10 >= allStocks.length}>
        Next 10 Stocks
      </CustomButton>
    </div>
  );
};

export {StocksTable};


