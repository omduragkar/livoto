import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { flexBetweenCenter } from '../../theme/commonStyles';
import { TbLayoutDashboard, TbTicket } from 'react-icons/tb';
import { BiBuildingHouse, BiLogOutCircle, BiUser } from 'react-icons/bi';
import { AiOutlineMessage} from 'react-icons/ai';
import { BsCashStack} from 'react-icons/bs';
import { FiSettings} from 'react-icons/fi';
import { CUSTOMERS, DASHBOARD, MESSAGES, PROPERTIES, TICKETS, TRANSACTIONS } from '../../constants/navConstantsAdmin';
import { blue, grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
const But = ({titl, toggleDrawer, data,history})=>{
    
    return (
        <Button sx={{
            py:1,
            my:0.5,
            borderRight:data == titl.title &&"3px solid",
            borderRightColor:theme=>data == titl.title && blue[500],
            background:data == titl.title && grey[100],
            borderRadius:data == titl.title && 0,
        }}
        onClick={()=>{
            history(`/admin/${titl.title.toLowerCase()}`)
        }}
        >
            <Stack sx={{
                ...flexBetweenCenter,
                width:"100%",
                px:2
            }}>
                {titl.icon}
                {toggleDrawer && <Typography>{titl.title}</Typography>}
            </Stack>
        </Button>
    )
}
const titarr=[
    {
        title:DASHBOARD,
        icon:<TbLayoutDashboard size={"24px"}/>
    },
    {
        title:TICKETS,
        icon:<TbTicket size={"24px"}/>
        
    },
    {
        
        title:CUSTOMERS,
        icon:<BiUser size={"24px"}/>
    },
    {
        
        title:PROPERTIES,
        icon:<BiBuildingHouse size={"24px"}/>
    },
    {
        
        title:MESSAGES,
        icon:<AiOutlineMessage size={"24px"}/>
    },
    {
        
        title:TRANSACTIONS,
        icon:<BsCashStack size={'24px'}/>
    },
]

export default function MiniDrawer({toggleDrawer, data}) {
    const history = useNavigate();

  return (
    <Stack direction={"column"} sx={{...flexBetweenCenter, flex:1, mx:0}}>
        <Box sx={{ display: 'flex', flex:1, flexDirection:"column", py:10, width:"100%" }}>
            {
                titarr.map(titl=>(
                    <But history={history} data={data} titl={titl} toggleDrawer={toggleDrawer}/>
                ))
            }
        </Box>
        <Box sx={{ display: 'flex', flex:1, flexDirection:"column", justifyContent:"flex-end", width:"100%"}}>
            <But history={history} data={data} titl={{title:"Settings", icon:<FiSettings size={"24px"}/>}} toggleDrawer={toggleDrawer}/>
            <But history={history} data={data} titl={{title:"Logout", icon:<BiLogOutCircle size={"24px"}/>}} toggleDrawer={toggleDrawer}/>
        </Box>

    </Stack>
  );
}
