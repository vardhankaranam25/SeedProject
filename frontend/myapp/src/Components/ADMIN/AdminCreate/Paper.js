import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './AdminCreatePaper.css';

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 728,
          height: 628,
        },
      }}
    >
      <Paper elevation={8}>
        <div className='ubox'>
          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
            className='sname'
          />
          <TextField
            id="outlined-basic"
            label="Student Roll No"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Student Branch"
            variant="outlined"
          />
          <Button
            variant="contained"
            className='submit-btn'
          >
            Submit
          </Button>
        </div>
      </Paper>
    </Box>
  );
}
