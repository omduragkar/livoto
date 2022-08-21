import { Tab, Tabs, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import {BiGroup, BiImages, BiMap} from "react-icons/bi"
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
        icon:<BiImages size={"18px"}/>,
        type:"View"

    },
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
const TabsMain = ({value, handleChange}) => {
    return (
    <Stack direction={"column"} sx={{
        // px:2
    }}>
        <Tabs  
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
            {newTabVal.map(labelValue=>(
                <Tab label={<NewTab newVal={labelValue}/>}/>
            ))}
        </Tabs>

    </Stack>
    )
}

export default TabsMain