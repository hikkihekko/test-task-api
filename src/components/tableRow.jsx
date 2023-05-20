import { TableRow, TableCell } from '@mui/material';

function ListRow({stock}) {
    return(
    <TableRow style={{collor:'#FFFFFF', backgroundColor: stock.change > 0 ? '#A6E367' : '#FD364E' }}>
      <TableCell component="th" scope="row">
        {stock.symbol}
      </TableCell>
      <TableCell align="right">{stock.iexOpen}</TableCell>
      <TableCell align="right">{stock.iexClose}</TableCell>
      <TableCell align="right">{stock.change}</TableCell>
      <TableCell align="right">{stock.changePercent}</TableCell>
    </TableRow>
)
}

export {ListRow}