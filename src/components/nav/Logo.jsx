import { blue } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'
import { FaAirbnb } from 'react-icons/fa'
import { Typography, useMediaQuery } from '@mui/material'
import { flexCenter } from '../../theme/commonStyles'
import {useNavigate} from "react-router-dom"
const Logo = () => {
  const breakp9 = useMediaQuery("(max-width:950px)");
  const history = useNavigate();
  return (
    <Box sx={{
      ...flexCenter,
      px:!breakp9 && 4,
      cursor:"pointer",
    }}
    onClick={()=>{
      console.log("hello")
      history("/")
    }}
    >
        <FaAirbnb size={40} color={blue[500]}/>
        {!breakp9 && (<Typography sx={{
            marginLeft:1,
            color:theme=>theme.palette.secondary.main,
            fontWeight:"bolder",
            fontSize:"large"
        }}>
            livoto
        </Typography>)}
    </Box>
  )
}

export default Logo