import { useSelector, useDispatch} from 'react-redux';
import { filterStocks} from './reduxToolkit/toolkitSlice';
import './App.css';
import {StocksTable} from './components/table';
import {TextField} from '@mui/material';

function App() {


  const dispatch = useDispatch();

  function SearchStock(e) {
    const searchValue = e.target.value;
    dispatch(filterStocks(searchValue));
  }

  return (
    <div className="App">
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        style={{
          width: '60%',
          margin: '50px auto',
        }}
        fullWidth
        onChange={SearchStock}
      />
      <StocksTable></StocksTable>
    </div>
  );
}

export default App;
