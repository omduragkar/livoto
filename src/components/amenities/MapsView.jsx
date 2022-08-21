import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const MapsView = () => {
  return (
    <Stack direction={"column"}>
      <Box>
          <Typography variant={"h2"} sx={{
              fontWeight:800,
              fontSize:"24px",
              py:2,
              color:theme=>theme.palette.secondary.main
          }}>
          Location
          </Typography>
      </Box>
  </Stack>
  )
}

export default MapsView