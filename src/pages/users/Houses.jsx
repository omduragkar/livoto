
import { CssBaseline, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react'
import {  useParams } from "react-router-dom";
import Ameneties from '../../components/amenities/Ameneties';
import Details from '../../components/amenities/Details';
import MapsView from '../../components/amenities/MapsView';
import Nearby from '../../components/amenities/Nearby';
import Occupany from '../../components/amenities/Occupany';
import Heading from '../../components/HouseExtraData/Heading';
import Houseimage from '../../components/HouseExtraData/Houseimage';
import PayButton from '../../components/HouseExtraData/PayButton';
import HomeDetailsNav from '../../components/nav/HomeDetailsNav';
import { locations } from '../../data/mockData';
import { dFlex } from '../../theme/commonStyles';


function TabPanel(props) {
    const { children, value, index, itemRef} = props;

    return (
        <div
            ref={value === index ? itemRef : null}

        >
        
            <Box>
                {children}
            </Box>
        
        </div>
    );
}

const Houses = () => {
    let { houseId } = useParams();
    const [value, setValue] = React.useState(0);
    const [data , setData] = useState({});
    const itemRef = useRef(null);

    const handleChange = (event, newValue) => {
        // console.log({newValue, event})
        setValue(newValue);
    };
    useEffect(()=>{
        const finData = locations.find(elm=>{
            console.log({elm, id:elm.id});
            return elm.id == houseId;
        })
        setData(finData)
    },[])
    useEffect(() => {
        console.log({itemRef});
        console.log({current:itemRef.current.offsetTop});
        if (itemRef && itemRef.current) {
            let win = document.getElementsByClassName("gridCont");
            // console.log(document.getElementsByClassName("gridCont"))
          win[0].scrollTo({
            top: itemRef.current.offsetTop <350? 0: itemRef.current.offsetTop - 100,
            behavior: "smooth"
          });
        }
    });
    return (
        <Box sx={{
            ...dFlex,
            flexDirection:"column",
            height:"100%",
            // border:"2px solid green"
        }}>
            <CssBaseline/>
            <Box sx={{
                height:{
                    xs:98,
                    md:60
                },
                // border:"2px solid red"
            }}>
                <HomeDetailsNav value={value} handleChange={handleChange}/>
            </Box>
            <Box sx={{
                minHeight:100,
                flex:1,
                // border:"2px solid blue",
                
            }}>
                <Grid container sx={{
                    height:"100%",
                    // border:"2px solid gray",
                }}>
                    <Grid item xs={12} md={8} lg={9} 
                    className={"gridCont"}
                    sx={{
                        height:"100%",
                        // border:"2px solid green",
                        py:3,
                        px:2,
                        pb:25,
                        overflowY:"scroll",
                        ...dFlex,
                        flexDirection:"column",
                        gap:5  
                    }}
                    >
                        <Heading data={data}/>
                        <TabPanel itemRef={itemRef} value={value} index={0}>
                            <Houseimage data={data}/>   
                        </TabPanel>
                        <TabPanel itemRef={itemRef} value={value} index={1}>
                            <Occupany/>
                        </TabPanel>
                        <TabPanel itemRef={itemRef} value={value} index={2}>
                            <Nearby/>
                        </TabPanel>
                        <TabPanel itemRef={itemRef} value={value} index={3}>
                            <Ameneties/>
                        </TabPanel>
                        <TabPanel itemRef={itemRef} value={value} index={4}>
                            <Details/>
                        </TabPanel>
                        <TabPanel itemRef={itemRef} value={value} index={5}>
                            <MapsView/>
                        </TabPanel>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3} sx={{
                        display:{
                            xs:"none",
                            md:"block"
                        }
                    }}>
                        <PayButton/>
                    </Grid>
                </Grid>
                
                {/* <Stack sx={{
                    flexDirection:{
                        xs:"column",
                        md:"row"
                    },
                    height:"100%",
                    
                }}>
                    <Box sx={{
                        flex:2,
                        ...dFlex,
                        flexDirection:"column",
                        overflowY:"scroll",
                        marginBottom:{xs:"15%", md:"0px"},

                    }}>
                        <Heading data={data}/>
                        <Houseimage data={data}/>    
                        <TabPanel value={value} index={0}>
                            <Occupany/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Nearby/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Ameneties/>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <Details/>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <MapsView/>
                        </TabPanel>

                        
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
                </Stack> */}
            </Box>
        </Box>
    )
}

export default Houses