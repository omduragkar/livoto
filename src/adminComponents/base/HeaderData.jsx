import { Dashboard } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import { flexBetweenCenter, flexCenter } from '../../theme/commonStyles'

const HeaderData = ({title}) => {
  return (
    <Stack sx={{...flexBetweenCenter, px:4, py:2}}>
        <Box sx={{...flexCenter, gap:1}}>
            <Typography variant={"h3"}>{title}</Typography>
        </Box>
        <Box>
            <Button sx={{p:1}}>
                <Stack sx={{...flexCenter}}>
                    <MdAddCircleOutline size={"24px"}/>
                    <Typography>Add Properties</Typography>
                </Stack>
            </Button>
        </Box>
    </Stack>
  )
}

export default HeaderData