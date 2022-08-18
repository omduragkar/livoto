import { WhatsappOutlined } from '@mui/icons-material'
import { Box, Button, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { dFlex, flexBetweenCenter, flexCenter } from '../../theme/commonStyles'

const PayButton = ({data}) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
  return (
    <Stack direction={"column"} sx={{
        boxShadow:3,
        flex:1,
        borderRadius:5,
        my:5
        // ...flexCenter,
    }}>
        <Box sx={{
        borderRadius:5,
        padding:2,
        }}>
            <Typography variant={"h4"} textAlign={"center"} p={2}>Get in Touch</Typography>

            <Stack direction={"column"}>
                    <FormControl sx={{
                        gap:3
                    }}>
                        {/* <OutlinedInput placeholder="Please enter text" /> */}
                        <TextField label={"Name"} required/>
                        <TextField label={"Contact Number"} required/>
                        <FormControl>
                            <Typography>I am a</Typography>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                sx={{
                                    ...dFlex,
                                }}
                                
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Duration of Stay</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Duration of Stay"
                                onChange={handleChange}
                                required
                            >
                                <MenuItem value={10}>less than 3 months</MenuItem>
                                <MenuItem value={20}> 3 months</MenuItem>
                                <MenuItem value={30}>greate than 3 months</MenuItem>
                            </Select>
                        </FormControl>

                        <Button variant={"text"}>Check Online 3D View</Button>
                        <Box sx={{
                            width:"100%",
                            ...flexBetweenCenter,
                            justifyContent:"space-between"
                        }}>
                            <Box sx={{
                                ...flexCenter,
                                gap:2
                            }}>
                                <Button variant={"contained"} color={"info"}>Schedule</Button>
                                <Button variant={"contained"} color={"info"}>Call us</Button>
                            </Box>
                            <IconButton color='success'>
                                <WhatsappOutlined/>
                            </IconButton>
                        </Box>
                    </FormControl>
            </Stack>
        </Box>
    </Stack>
  )
}

export default PayButton