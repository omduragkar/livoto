import { FilterListOutlined } from '@mui/icons-material';
import { Button, Paper, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { locationsTab } from '../../data/mockData';
import { dFlex, flexBetweenCenter, flexCenter } from '../../theme/commonStyles';

const FilterTab = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper sx={{ position: 'fixed', top: 70, left: 0, right: 0, zIndex:10 }} elevation={1}>
        <Box sx={{ maxWidth: "100%", bgcolor: 'background.paper', ...dFlex, alignItems:"center", borderBottom:"1px solid #ddd", padding:1 }}>
            <Stack sx={{
                ...flexBetweenCenter,
                width:"100%"
            }}>
            
                <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
                >
                {locationsTab?.map(elm=>(
                    <Tab icon={elm.icon} iconPosition={"top"} label={elm.label} key={elm.id} />
                ))}
                </Tabs>
                <Button sx={{
                    borderRadius:20,
                    border:"1px solid #ddd",
                    paddingX:{
                        xl:"1%",
                        lg:"2%",
                        md:"2%",
                        xs:"0%"
                    },
                    display:"block",
                    mr:{
                        xs:"0px !important",
                        md:"35px !important"
                    },
                    ml:{
                        xs:"0% !important"
                    }

                }}>
                    <Stack sx={{
                        padding:"5%",
                        paddingRight:"1%",
                        ...flexCenter
                    }}>
                        <FilterListOutlined/>
                        <Typography sx={{
                            display:{
                                xs:"none",
                                md:"block",
                            }
                        }}>Filters</Typography>
                    </Stack>
                </Button>
            </Stack>
        </Box>
    </Paper>
  )
}

export default FilterTab