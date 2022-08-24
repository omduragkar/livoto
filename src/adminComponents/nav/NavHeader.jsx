import { ArrowDropDown, Search } from '@mui/icons-material'
import { Avatar, Box, Button, IconButton, InputBase, Paper } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { BsBell } from 'react-icons/bs'
import {GiHamburgerMenu} from "react-icons/gi"
import { flexBetweenCenter, flexCenter } from '../../theme/commonStyles'
const NavHeader = ({setToggle}) => {
  return (
    <Stack sx={{boxShadow:1, height:"100%", width:"100%", ...flexBetweenCenter, px:2}}>
      <Box sx={{...flexCenter, gap:2}}>
        <IconButton onClick={()=>setToggle(prev=>!prev)}>
          <GiHamburgerMenu/>
        </IconButton>
        <Paper>
          <Stack sx={{px:1, py:0.5}}>
            <IconButton>
              <Search/>
            </IconButton>
            <InputBase sx={{pr:5}}/>
          </Stack>
        </Paper>
      </Box>
      <Box sx={{...flexCenter, gap:2}}>
        <IconButton>
          <BsBell/>
        </IconButton>
        <Button variant={"outlined"}>
          <Stack sx={{...flexCenter}}>
            <Avatar/>
            <ArrowDropDown/>
          </Stack>
        </Button>
      </Box>
    </Stack>
  )
}

export default NavHeader