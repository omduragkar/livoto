import React from 'react'
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { dFlex } from '../theme/commonStyles';

import FilterTab from '../components/filters/FilterTab';
import HomeLocationCard from '../components/card/HomeLocationCard';

const Home = () => {
  return (
    <Box sx={{
        ...dFlex,
        flexDirection:"column",
        flexGrow:1,
        height:100,
        overflowY:"scroll",
    }}>
        <Box>
          <FilterTab/>
        </Box>
          <Box sx={{
            
        }}>
            <Container maxWidth={"xl"}>
              <HomeLocationCard/>
            </Container>
        </Box>
    </Box>
  )
}

export default Home