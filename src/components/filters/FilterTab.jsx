import { FilterListOutlined } from '@mui/icons-material';
import { Button, Stack, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { locationsTab } from '../../data/mockData';
import { dFlex } from '../../theme/commonStyles';

const FilterTab = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ maxWidth: "100%", bgcolor: 'background.paper', ...dFlex, alignItems:"center", borderBottom:"1px solid #ddd", padding:1 }}>
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
            width:"15%",
            paddingX:{
                xl:"1%",
                lg:"2%",
                md:"2%",
            },
            paddingRight:{
                xl:"1.5%",
                lg:"2.5%",
                md:"2.5%",

            },
            display:{
                xs:"none",
                lg:"block"
            }

        }}>
            <Stack sx={{
                padding:"5%",
                paddingRight:"1%"
            }}>
                <FilterListOutlined/>
                <Typography sx={{
                    display:{
                        md:"block",
                        xs:"none",
                    }
                }}>Filters</Typography>
            </Stack>
        </Button>
    </Box>
  )
}

export default FilterTab