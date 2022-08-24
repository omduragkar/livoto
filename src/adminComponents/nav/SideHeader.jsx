import { Stack, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'
import {TbBrandAirbnb} from "react-icons/tb"
import {  dFlex, flexCenter } from '../../theme/commonStyles'
import MiniDrawer from './SideLow'
const SideHeader = ({setToggle, toggleDrawer, data}) => {
  return (
    <Stack sx={{ height:"100%", width:"100%"}} direction={"column"}>
      <Box sx={{
        ...flexCenter,
        height:70,
        gap:2
      }}>
        <TbBrandAirbnb color={blue[400]} size={"40px"}/>
        {toggleDrawer && <Typography variant={"h3"} >Livoto</Typography>}
      </Box>
      <Box sx={{
        ...dFlex,
        flexDirection:"column",
        flex:1,
        gap:2,
        marginTop:"0px !important"
      }}>
        <MiniDrawer setToggle={setToggle} data={data} toggleDrawer={toggleDrawer}/>
      </Box>
    </Stack>
  )
}

export default SideHeader