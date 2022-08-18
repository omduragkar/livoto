import { Button, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system'
import React from 'react'
import { CgGym } from "react-icons/cg";
import { AiOutlineWifi } from "react-icons/ai";
import { MdOutlineBreakfastDining } from "react-icons/md";
import { GiChickenOven, GiElectric, GiWashingMachine, GiWaterTower } from "react-icons/gi";


const IconAmenities = ({ico})=>{
  return (
    <Button sx={{
      border:"1px solid #ddd",
      borderRadius:2,
      gap:1,
      px:2
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
    icon:<CgGym size={"24px"}/>,
    type:"free Gym",
  },
  {
    icon:<MdOutlineBreakfastDining size={"24px"}/>,
    type:"free Breakfast",
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
    <Stack sx={{
      flexWrap:"wrap",
      gap:2
    }}>
      {
        arr.map(ico=>(
          <IconAmenities ico={ico}/>
        ))
      }
    </Stack>
  )
}

export default Ameneties