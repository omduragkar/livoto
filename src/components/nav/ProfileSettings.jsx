import { Button, Link } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { FaRegUserCircle } from "react-icons/fa"
import { BsGlobe } from "react-icons/bs"
import { flexCenter } from '../../theme/commonStyles'
import { useNavigate } from 'react-router-dom'
import ShareModal from './ShareModal'

const ProfileSettings = () => {
    const history = useNavigate();
    const [open, setOpen] = useState(false);
  return (
    <Box sx={{...flexCenter, pl:1}}>
        <Link onClick={()=>{
            setOpen(!open)
        }}>Invite</Link>
        <Stack>
            <Button onClick={()=>{
                history("/user/auth/signup")
            }}>
                <BsGlobe size={24}/>
            </Button>
            <Button sx={{
                borderRadius:20,
                border:"1px solid #ddd",
                px:2,
                py:1
            }}
            onClick={()=>{
                history("/user/auth/login")
            }}
            >
                <Stack>
                    <AiOutlineMenu size={24}/>
                    <FaRegUserCircle size={24}/>
                </Stack>
            </Button>
        </Stack>
        <ShareModal open={open} setOpen={setOpen}/>

    </Box>
  )
}

export default ProfileSettings