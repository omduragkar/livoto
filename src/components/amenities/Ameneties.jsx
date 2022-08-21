import { Button, Typography } from '@mui/material';
import {  Stack } from '@mui/system'
import React from 'react'
import { CgGym } from "react-icons/cg";
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineBreakfastDining } from "react-icons/md";
import { GiChickenOven, GiElectric, GiWashingMachine, GiWaterTower } from "react-icons/gi";
import { flexBetweenCenter } from '../../theme/commonStyles';


const IconAmenities = ({ico})=>{
  return (
    <Button sx={{
      border:"1px solid #ddd",
      borderRadius:2,
      gap:1,
      px:2,
      mx:"0px !important"
    }}>
      {ico?.icon}
      <Typography>{ico?.type}</Typography>
    </Button>
  )
}
const arr=[
  {
    icon:<AiOutlineWifi size={"24px"}/>,
    type:"free Wifi",
  },
  {
    icon:<MdOutlineBreakfastDining size={"24px"}/>,
    type:"free Breakfast",
  },
  {
    icon:<CgGym size={"24px"}/>,
    type:"free Gym",
  },
  {
    icon:<GiElectric size={"24px"}/>,
    type:"backup Generator",
  },
  {
    icon:<GiElectric size={"24px"}/>,
    type:"Free Space",

  },
  {
    icon:<GiWashingMachine size={"24px"}/>,
    type:"Washing Machine",
  },
  {
    icon:<GiChickenOven size={"24px"}/>,
    type:"oven",
  },
  {
    icon:<GiWaterTower size={"24px"}/>,
    type:"RO purifier",
  },

]
const Ameneties = () => {
  return (
    <Stack direction={"column"}>
      <Typography variant={"h2"} sx={{
        fontWeight:800,
        fontSize:"24px",
        py:2,
        color:theme=>theme.palette.secondary.main
      }}>Amenities</Typography>
      <Stack sx={{
        flexWrap:"wrap",
        ...flexBetweenCenter,
        justifyContent:{
          xs:"flex-start",
          md:"space-evenly"
        },
        gap:{
          xs:1,
          md:3
        }
      }}>
        {
          arr.map(ico=>(
            <IconAmenities ico={ico}/>
          ))
        }
      </Stack>

    </Stack>
  )
}

export default Ameneties