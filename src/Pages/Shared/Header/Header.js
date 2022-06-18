import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor: 'white'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Comic Sans MS', fontSize: '25px', textAlign:'left', color: 'black'}}>
            Top10
          </Typography> 
        </Toolbar>
      </AppBar>
      <Button color="inherit" sx={{fontFamily: 'Comic Sans MS', textAlign: 'left'}}>Login</Button>
      <Button color="inherit" sx={{fontFamily: 'Comic Sans MS', textAlign: 'left'}}>Login</Button>
      <Button color="inherit" sx={{fontFamily: 'Comic Sans MS', textAlign: 'left'}}>Login</Button>
    </Box>
  );
}
