import { Button, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import {  BsArrowRightCircle } from 'react-icons/bs';
import {  flexBetweenCenter } from '../../theme/commonStyles';

const Details = () => {
    const [readm, setReadm] = useState(true);
    const text="Tallinn House by livoto is not your everyday PG in Pune.It's your second home. That's because, besides just a fully-furnished room for you, this residence has made room for all the comforts that you're used to back home. From housekeeping (so you don't have to bother about cleaning your room) to high-speed internet (so a slow connection doesn't come between you and your favourite series) to delicious meals (so you're not continually missing home-cooked food), our amenities are chosen, keeping your needs in mind. And while you're being pampered by our amenities, our tech-integrations will further raise the level of comfort. The Stanza Living - Resident App, machine learning, and other forms of technology take all boring, everyday tasks to the online world and shape an effortless living experience. Along with technology, we're also fans of real-world bonding. Our regular community events and workshops are tailor-made to bring together you and your co-residents so that you become one big, happy Stanza Living family. Speaking of family, we're implementing every safety measure in the book - from regular sanitization to thermal monitoring - to protect you from COVID-19. Because that's what a family does. Now, thanks to all these reasons, Tallinn House has found a place above the local PG in Pune. And if you drop by for a visit to your second home, we bet it'll also find a place in your heart."
    // useEffect(()=>{
    //     let arr = text.split(" ");
    //     if(arr.length>10){
    //         setReadm(true);
    //     }
    // },[])
    return (
        <Stack direction={"column"}>
            <Box>
                <Typography variant={"h2"} sx={{
                    fontWeight:800,
                    fontSize:"24px",
                    py:2,
                    color:theme=>theme.palette.secondary.main
                }}>
                Details
                </Typography>
                <Typography>
                    {
                        readm ?
                        "" + text.split(" ").slice(1, 31).join(" ")
                        :
                        text

                    }
                    <Button onClick={()=>setReadm(prop=>!prop)}>{readm ? "... Read More" : "... Read less"}</Button>
                </Typography>
            </Box>
            <Box sx={{
                ...flexBetweenCenter,
                flexDirection:{
                    xs:"column",
                    sm:"row"
                },
                gap:2,
                px:1
            }}>
                <Button sx={{
                    border:"1px solid #ddd"
                }}>
                    <Stack sx={{
                        ...flexBetweenCenter,
                        
                    }}>
                        <Typography>View Terms and Conditions</Typography>
                        <BsArrowRightCircle/>
                    </Stack>
                </Button>
                <Button sx={{
                    border:"1px solid #ddd"
                }}>
                    <Stack sx={{
                        ...flexBetweenCenter
                    }}>
                        <Typography>View Policy and House Rules</Typography>
                        <BsArrowRightCircle/>
                    </Stack>
                </Button>
                <Button sx={{
                    border:"1px solid #ddd"
                }}>
                    <Stack sx={{
                        ...flexBetweenCenter
                    }}>
                        <Typography>View Paperwork Sample</Typography>
                        <BsArrowRightCircle/>
                    </Stack>
                </Button>
            </Box>
        </Stack>
    )
}

export default Details