import { Button, Divider, Paper, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Box, Stack } from '@mui/system'
import React from 'react'
import {IoSearchCircleSharp} from "react-icons/io5"


const LocationSearch = () => {

    const choices=[
        {id:1, text:"Anywhere"},
        {id:1, text:"Any week"},
        {id:1, text:"Add Guest", withIcon:true},
    ]
  return (
    <Paper sx={{
        borderRadius:20,
        
    }}
    elevation={3}
    >   
    <Stack divider={<Divider flexItem orientation='vertical' sx={{ml:0}}/>} sx={{pl:2}}>
        {choices.map(elm=>(
            <>
                <Button key={elm.id}>
                    <Typography sx={{fontWeight:"bold"}}>
                        {elm.text}
                    </Typography>

                    {elm.withIcon && 
                    <Box sx={{
                       mt:1,
                       mr:1,
                       ml:1
                    }}>
                        <IoSearchCircleSharp size={32} color={blue[400]}/>
                    </Box>}
                </Button>
            </>
        ))}
    </Stack>
    </Paper>
  )
}

export default LocationSearch