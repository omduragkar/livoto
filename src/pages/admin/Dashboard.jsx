import { Box,  Stack } from '@mui/material'
import React, { useState } from 'react'
import HeaderData from '../../adminComponents/base/HeaderData'
import NavHeader from '../../adminComponents/nav/NavHeader'
import SideHeader from '../../adminComponents/nav/SideHeader'
import { CUSTOMERS, DASHBOARD, MESSAGES, PROPERTIES, TICKETS, TRANSACTIONS } from '../../constants/navConstantsAdmin'
const Switcher = ({data})=>{
    switch(data){
        case DASHBOARD:return (<HeaderData title={DASHBOARD}/>)
        case TICKETS:return (<HeaderData title={TICKETS}/>)
        case CUSTOMERS:return (<HeaderData title={CUSTOMERS}/>)
        case PROPERTIES:return (<HeaderData title={PROPERTIES}/>)
        case MESSAGES:return (<HeaderData title={MESSAGES}/>)
        case TRANSACTIONS:return (<HeaderData title={TRANSACTIONS}/>)
        default:return (<></>)
    }

}

const Dashboard = ({data}) => {
    const [toggleDrawer, setToggle] = useState(true);
    document.title =`Livoto | Admin | ${data.toLowerCase()}`
  return (
    <Stack sx={{flex:1, gap:0}}>
        <Box sx={{
            width:toggleDrawer?200:"fit-content",
            height:"100%",
            boxShadow:1
        }}>
            <SideHeader toggleDrawer={toggleDrawer} setToggle={setToggle} data={data}/>
        </Box>
        <Stack direction={"column"} sx={{
            height:"100%",
            flex:1,
            marginLeft:"0px !important"
        }}>
            <Box sx={{
                height:70,
                width:"100%",
                marginLeft:"0px !important"
            }}>
                <NavHeader setToggle={setToggle}/>
            </Box>
            <Stack direction={"column"} sx={{
                flex:1,
                marginTop:"0px !important"
            }}>
                {console.log(data)}
                <Box sx={{
                    flex:1,
                    width:"100%",
                    marginLeft:"0px !important",
                }}>
                    {<Switcher data={data}/>}
                    
                </Box>
            </Stack>
        </Stack>
            
    </Stack>
  )
}

export default Dashboard