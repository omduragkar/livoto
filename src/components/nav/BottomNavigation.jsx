import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';

import {CgProfile, CgSearch} from 'react-icons/cg';
import { flexBetween, flexCenter } from '../../theme/commonStyles';


function BottomNavigationBar() {
  const [value, setValue] = React.useState(0);
  return (
      
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,}} 
      elevation={1}
    >
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Explore" icon={<CgSearch size={"24px"}/>} />
          <BottomNavigationAction label="Wishlists" icon={<FavoriteIcon size={"24px"}/>} />
          <BottomNavigationAction label="Log in" icon={<CgProfile size={"24px"}/>} />
        </BottomNavigation>
      </Box>
    </Paper>
  );
}



export default BottomNavigationBar