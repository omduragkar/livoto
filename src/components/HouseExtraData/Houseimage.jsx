import { Box, Tab, Tabs } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { dFlex } from '../../theme/commonStyles'

const Houseimage = ({data}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    return (

        <Stack sx={{
            width:"100%",
            height:"100%",
            marginTop:2,
            ...dFlex,
            flexDirection:"column"

        }}>
            {console.log(data?.locationImages?.at(value))}
            <Box sx={{
                height:"70%",
                width:"100%",
                px:{
                    xs:1,
                    sm:2,
                    md:4
                }
            }}>
                <img src={data?.locationImages?.at(value)?.url} alt={"images"} height={"100%"} width={"100%"} style={{
                    borderRadius:10,
                    
                }}/>
            </Box>
            <Box>
                <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                >
                {data?.locationImages?.map(elm=>(
                    <Tab key={elm.id} icon={<img src={elm.url} alt={data?.locationImages} height={100} width={100}/>} />
                    
                ))}
                </Tabs>

            </Box>
        </Stack>
    )
}

export default Houseimage