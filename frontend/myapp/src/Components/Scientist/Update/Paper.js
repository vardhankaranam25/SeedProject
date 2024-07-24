import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//import '/Users/vardhankaranam/.ssh/SeedProject/frontend/myapp/src/Components/Scientist/Update/UpdatePaper.css';


export default function PaperUpdate() {
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
      <div className='box'>
      <TextField id="outlined-basic" label="id" variant="outlined" className='id'/>
      <TextField id="outlined-basic" label="StudentName" variant="outlined" />
      <TextField id="outlined-basic" label="StudentRollNo" variant="outlined" />
      <TextField id="outlined-basic" label="StudentBranch" variant="outlined" />
      <Button variant="text">Submit</Button>
      </div>
      </Paper>
      
    </Box>
  );
}