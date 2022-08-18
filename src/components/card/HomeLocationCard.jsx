import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { locations } from '../../data/mockData'
import CarouselCard from './CarouselCard';

const HomeLocationCard = () => {
    const [cards] = useState(locations);
    if(!cards.length){
        return (<>No results to show</>)
    }
    return (
        <Box sx={{ mx: 2, my:2 }}>
            <Grid container rowSpacing={3} columnSpacing={3} sx={{
                flexGrow:1,
            }}>
                {cards.map(card=>(
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <CarouselCard location={card}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default HomeLocationCard