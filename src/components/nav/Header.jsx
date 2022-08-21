
import { useMediaQuery } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { dFlex, flexBetween } from '../../theme/commonStyles'
import LocationSearch from './LocationSearch'
import Logo from './Logo'
import ProfileSettings from './ProfileSettings'
import Search from './Search'

const Header = () => {
    const breakp = useMediaQuery("(max-width:600px)");
    const breakp8 = useMediaQuery("(max-width:850px)");
    const breakp7 = useMediaQuery("(max-width:700px)");
     console.log("🚀 ~ file: Header.jsx ~ line 12 ~ Header ~ breakp", breakp)
  return (
    <Box sx={{
        ...dFlex,
        minHeight:70,
        borderBottom:"1px solid #ddd"
    }}>
        <Container maxWidth={"xl"}>
            <Box sx={{
                ...flexBetween,
                alignItems:'center',
                minHeight:70,
            }}>
                <Box sx={{
                    ...flexBetween,
                    justifyContent:!breakp8?"space-between":"flex-start",
                    alignItems:'center',
                    minHeight:70,
                    flexGrow:1,
                    gap:!breakp8 ? 5 :1
                }}>
                    <Logo/>
                    {
                        !breakp7 &&
                    <LocationSearch/>
                    }
                </Box>
                <Box sx={{
                    ...dFlex,
                    justifyContent:breakp7?"center":"flex-end",
                    alignItems:'center',
                    minHeight:70,
                    flexGrow:1
                }}>
                    {breakp7 ? <Search/>
                    :
                    
                    <ProfileSettings/>
                    }
                </Box>
                
                
            </Box>
        </Container>
    </Box>
  )
}

export default Header