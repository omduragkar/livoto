import { Box, Tab, Tabs, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Ameneties from './Ameneties';
import Details from './Details';
import MapsView from './MapsView';
import Nearby from './Nearby';
import Occupany from './Occupany';
import {BiGroup, BiMap} from "react-icons/bi"
import {SiGooglenearby} from "react-icons/si"
import { flexCenter } from '../../theme/commonStyles';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';

const NewTab=({newVal})=>{
    return (
        <Stack sx={{...flexCenter}}>
            {newVal?.icon}
            <Typography sx={{m:"0px !important", pl:0.25}}>{newVal?.type}</Typography>
        </Stack>
    )
}

const newTabVal = [
    {
        icon:<BiGroup size={"18px"}/>,
        type:"Occupancy"

    },
    {
        icon:<SiGooglenearby size={"18px"}/>,
        type:"nearby"

    },
    {
        icon:<MdOutlineFeaturedPlayList size={"18px"}/>,
        type:"amenities"

    },
    {
        icon:<TbListDetails size={"18px"}/>,
        type:"details"
    },
    {
        icon:<BiMap size={"18px"}/>,
        type:"map"
    }
]
const TabsMain = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        // console.log({newValue, event})
        setValue(newValue);
    };
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
          >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
          </div>
        );
      }
    return (
    <Stack direction={"column"} sx={{
        px:2
    }}>
        <Tabs
            
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
            {newTabVal.map(labelValue=>(
                <Tab label={<NewTab newVal={labelValue}/>} />
            ))}
        </Tabs>
        <Box sx={{
            height:{
                xs:"100%",
                md:"75vh",

            }
        }}>
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

    </Stack>
    )
}

export default TabsMain