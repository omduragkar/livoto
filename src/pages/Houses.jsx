import { Stack } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import {  useParams } from "react-router-dom";
import TabsMain from '../components/amenities/TabsMain';
import Heading from '../components/HouseExtraData/Heading';
import Houseimage from '../components/HouseExtraData/Houseimage';
import PayButton from '../components/HouseExtraData/PayButton';
import { locations } from '../data/mockData';
import { dFlex } from '../theme/commonStyles';

const Houses = () => {
    let { houseId } = useParams();
    const [data , setData] = useState({});
    useEffect(()=>{
        const finData = locations.find(elm=>{
            console.log({elm, id:elm.id});
            return elm.id == houseId;
        })
        setData(finData)
    },[])
    return (
        <Container maxWidth={"xl"} sx={{
            marginTop:2,
            flexGrow:1,
            overflowY:{
                xs:"scroll",
                md:"hidden"
            },
        }}>
            <Stack sx={{
                flexDirection:{
                    xs:"column",
                    md:"row"
                },
                maxHeight:"100%",
                
            }}>
                <Box sx={{
                    flex:2,
                    ...dFlex,
                    flexDirection:"column",
                    overflowY:{
                        xs:"visible",
                        md:"scroll"
                    },
                    marginBottom:{xs:"15%", md:"0px"},

                }}>
                    <Heading data={data}/>
                    <Houseimage data={data}/>    
                    <TabsMain/>
                    
                </Box>
                <Box sx={{
                    flex:1,
                    position:"relative",
                    marginTop:5,
                    marginLeft:"0px !important",
                    paddingBottom:"10%",
                    overflowY:{
                        xs:"visible",
                        md:"auto"
                    },

                }}>
                    <Box sx={{
                        position:{
                            xs:"static",
                            md:"absolute"
                        },
                        right:"0",
                        left:0,
                        top:0,
                        bottom:"0",
                        marginLeft:{xs:0, md:2},
                        pb:10,
                    }}>
                        <PayButton/>
                    </Box>
                </Box>
            </Stack>
        </Container>
    )
}

export default Houses