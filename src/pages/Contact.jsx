import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
const Contact = () => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    lastTwoRows: {
      background: '#f2f2f2',
    },
  })
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Column 1</TableCell>
            <TableCell>Column 2</TableCell>
            <TableCell>Column 3</TableCell>
            <TableCell>Column 4</TableCell>
            <TableCell>Column 5</TableCell>
            <TableCell>Column 6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(3)].map((_, rowIndex) => (
            <TableRow
              key={rowIndex}
              className={rowIndex >= 1 ? classes.lastTwoRows : ''}
            >
              {[...Array(6)].map((_, colIndex) => (
                <TableCell key={colIndex}>
                  Row {rowIndex + 1}, Cell {colIndex + 1}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Contact
