import { Button, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import {TbBed} from "react-icons/tb"
import {MdOutlineBed} from "react-icons/md"
import {MdOutlineSingleBed} from "react-icons/md"
import {HiOutlineCurrencyRupee} from "react-icons/hi"
import { flexBetweenCenter, flexCenter } from '../../theme/commonStyles'

const OccupanyCard = (
  {cardData}
)=>{
  // console.log({ cardData})
  return (

    <Button sx={{
      ...flexCenter,
      flexDirection:"column",
      justifyContent:"flex-start",
      gap:1,
      border:"1px solid #ddd",
      px:1,
      py:2,
      borderRadius:2,
      width:{
        xs:"100%",
        
      }
    }}>
      <Box sx={{...flexCenter, gap:1, flexDirection:{xs:"column", md:"row"}}}>
        {cardData?.icon}
        <Typography>{cardData?.occupancy}</Typography>
      </Box>
      <Stack sx={{...flexCenter, gap:0.5}}>
        <HiOutlineCurrencyRupee size={"25px"} color={"green"}/>
        <Typography sx={{
          margin:"0px !important",
          fontSize:"25px",

        }}>{cardData?.price}</Typography>
      </Stack>
    </Button>

  )
}
const arr=[
  {
    occupancy:"Single Occupancy",
    icon:<TbBed size={"30px"}/>,
    price:"4900",
  },
  {
    occupancy:"Double Occupancy",
    icon:<MdOutlineBed size={"30px"}/>,
    price:"9000",
  },
  {
    occupancy:"Unisex Room Occupancy",
    icon:<MdOutlineSingleBed size={"30px"}/>,
    price:"15000",
  },
]
const Occupany = () => {
  return (
    <Box>
      <Typography variant={"h2"} sx={{
        fontWeight:800,
        fontSize:"24px",
        py:2,
        px:0.5,
        color:theme=>theme.palette.secondary.main
      }}>Occupancy</Typography>
      <Stack sx={{
        ...flexBetweenCenter,
        flexDirection:{
          xs:"column",
          sm:"row"
        },
        width:"100%",
        gap:2
      }}>
        {arr.map(cards=>(
          <OccupanyCard cardData={cards}/>

        ))}
      </Stack>
    </Box>
  )
}

export default Occupany