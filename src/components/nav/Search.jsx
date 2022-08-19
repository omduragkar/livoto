import {  SearchSharp } from '@mui/icons-material'
import { IconButton, InputBase, Paper } from '@mui/material'
import { Stack } from '@mui/system'
import { GoLocation } from 'react-icons/go'
import React from 'react'

const Search = () => {
  return (
    <Paper sx={{
      borderRadius:20,
      border:"1px solid #ddd"
    }}>
        <Stack>
          <IconButton>
            <SearchSharp/>
          </IconButton>
          <InputBase placeholder='Search here' size='medium'/>
          <IconButton>
            <GoLocation/>
          </IconButton>
        </Stack>
    </Paper>
  )
}

export default Search