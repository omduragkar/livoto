
import { Button, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { GrContact } from 'react-icons/gr'
import { dFlex, flexBetweenCenter, flexCenter } from '../../theme/commonStyles'
import TabsMain from '../amenities/TabsMain'
import PayModal from '../HouseExtraData/PayModal'
import Logo from './Logo'
const HomeDetailsNav = ({value, handleChange}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (val) => setOpen(val);
    return (
        <Container maxWidth={"xl"} sx={{
            width:"100%",
            height:"100%",
        }}>

            <Box sx={{
                ...flexCenter,
                flexDirection:"column",
                width:"100%",
                top:0,
                borderBottom:"1px solid #ddd",
            }}>
                <Box sx={{
                    ...flexBetweenCenter,
                    justifyContent:{
                        xs:"space-between !important",
                        md:"center"
                    },
                    flex:1,
                    width:"100%",
                    pt:{
                        xs:1,
                        md:0
                    }
                }}>
                    <Logo/>

                    <Box sx={{
                        ...dFlex,
                        display:{
                            xs:"none",
                            md:"flex",
                        },
                        flexDirection:"column", 
                        width:"100%",
                        flex:1,
                    }}>
                        <TabsMain handleChange={handleChange} value={value}/>
                    </Box>

                    <Button sx={{
                        border:"1px solid #ddd",
                        px:2
                    }}
                    onClick={()=>handleOpen(true)}
                    >
                        <Stack sx={{
                            ...flexCenter
                        }}>
                            <GrContact size={"18px"}/>
                            <Typography>Enquire Now</Typography>
                        </Stack>
                    </Button>
                </Box>
                <Container maxWidth={"xl"} sx={{
                    display:{
                        xs:"block",
                        md:"none"
                    },
                    px:0
                }}>
                    <TabsMain handleChange={handleChange} value={value}/>
                </Container>
                <PayModal open={open} handleOpen={handleOpen}/>
            </Box>
        </Container>

    
  )
}


export default HomeDetailsNav