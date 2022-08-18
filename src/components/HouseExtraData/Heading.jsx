import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { BiHeart, BiShareAlt } from 'react-icons/bi';
import { BsSave } from 'react-icons/bs';
import { dFlex, flexBetweenCenter, flexCenter } from '../../theme/commonStyles';
import PayButton from './PayButton';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
const Heading = ({data}) => {
  return (
    <Stack sx={{
        width:{
            md:"100%",
        },
        px:{
            xs:1,
            sm:2,
            md:4
        },
        flexDirection:{
            xs:"column",
            sm:"row"
        },
        justifyContent:"space-between"
    }}>
        <Box sx={{
            // px:4,
            py:1,
        }}>
            <Typography component={"h4"} sx={{
                fontSize:"25px",
                fontWeight:900
            }}>{data.location}</Typography>
            <Stack sx={{
                ...flexBetweenCenter,
                justifyContent:"flex-start"

            }}>
                { data.isNew &&
                    <Box>
                        <Typography component="body1"> New </Typography>
                    </Box>
                }
                <Box sx={{
                    ...flexCenter,
                }}>
                    <AiFillStar size={18} />
                    <Typography component="body1"> {data.rating}</Typography>
                </Box>
                <Box>
                    <Typography component="body1"> Nagpur, India </Typography>
                </Box>
            </Stack>
        </Box>
        <Box>
            <Box sx={{
                ...dFlex,
                justifyContent:"flex-end",
                pr:1,
                gap:1,
                flexDirection:"row"
            }}>
                <Button variant='text' size='large' sx={{
                    gap:1
                }}>
                    <BiHeart/>
                    <Typography color={"black"} >Save</Typography>
                </Button>
                <Button sx={{
                    gap:1
                }}>
                    <BiShareAlt/>
                    <Typography color={"black"}>Share</Typography>
                </Button>
            </Box>
            <Box>
                <Button sx={{
                    border:"1px solid  #ddd",
                    // boxShadow:1,
                    borderRadius:"10px",
                    width:"100%"
                }}>
                    <Stack>
                        <MapOutlinedIcon/>
                        <Typography color={"black"}>See on Map</Typography>
                    </Stack>
                </Button>
            </Box>
        </Box>

    </Stack>
  )
}

export default Heading