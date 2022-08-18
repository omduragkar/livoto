import { Button, Fab, Link } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { FaRegUserCircle } from "react-icons/fa"
import { BsGlobe } from "react-icons/bs"
import { dFlex, flexCenter } from '../../theme/commonStyles'

const ProfileSettings = () => {
  return (
    <Box sx={{...flexCenter, pl:1}}>
        <Link href="#">Invite</Link>
        <Stack>
            <Button>
                <BsGlobe size={24}/>
            </Button>
            <Button sx={{
                borderRadius:20,
                border:"1px solid #ddd",
                px:2,
                py:1
            }}>
                <Stack>
                    <AiOutlineMenu size={24}/>
                    <FaRegUserCircle size={24}/>
                </Stack>
            </Button>
        </Stack>
    </Box>
  )
}

export default ProfileSettings