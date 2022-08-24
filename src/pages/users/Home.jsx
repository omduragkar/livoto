import React from 'react'
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { dFlex } from '../../theme/commonStyles';

import FilterTab from '../../components/filters/FilterTab';
import HomeLocationCard from '../../components/card/HomeLocationCard';
import Header from '../../components/nav/Header';

const Home = () => {
  return (
    <Box sx={{
      ...dFlex,
      flexDirection:"column",
      height:"100%"
    }}>
      <Header/>
      <Box sx={{
        ...dFlex,
        minHeight:90,
        position:"relative",
        backgroundColor:"transparent"
      }}>
        <FilterTab/>
      </Box>
      <Box sx={{
          ...dFlex,
          flexDirection:"column",
          flexGrow:1,
          height:100,
          overflowY:"scroll",
          pb:20,
          
      }}>
          
            <Box sx={{
              
          }}>
            <Container maxWidth={"xl"} sx={{
              px:{
                xs:0,
                sm:2,
                md:4
              }
            }}>
              <HomeLocationCard/>
            </Container>
          </Box>
      </Box>
    </Box>  
  )
}

export default Home