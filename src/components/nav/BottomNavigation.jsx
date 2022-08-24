import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';

import {CgProfile, CgSearch} from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';


function BottomNavigationBar() {
  const history = useNavigate();
  const [value, setValue] = React.useState(0);
  return (
      
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, height:60}} 
      elevation={1}
    >
      <Box sx = {{
        height:"100%"
      }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Explore" icon={<CgSearch size={"24px"}/>} onClick={()=>{
            history("/")
          }}/>
          <BottomNavigationAction label="Wishlists" icon={<FavoriteIcon size={"24px"}/>} onClick={()=>{
            history("/user/auth/signup")
          }}/>
          <BottomNavigationAction label="Log in" icon={<CgProfile size={"24px"}/>} onClick={()=>{
            history("/user/auth/login")
          }}/>
        </BottomNavigation>
      </Box>
    </Paper>
  );
}



export default BottomNavigationBar