import { FilterListOutlined, SearchSharp } from '@mui/icons-material'
import { IconButton, InputBase, Paper } from '@mui/material'
import { Stack } from '@mui/system'
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
        <InputBase/>
        <IconButton>
          <FilterListOutlined/>
        </IconButton>
        </Stack>
    </Paper>
  )
}

export default Search