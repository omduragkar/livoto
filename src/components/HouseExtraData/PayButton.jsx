import { WhatsappOutlined } from '@mui/icons-material'
import { Box, Button, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { dFlex, flexBetweenCenter, flexCenter } from '../../theme/commonStyles'
import ThreeSixtyRoundedIcon from '@mui/icons-material/ThreeSixtyRounded';
const PayButton = ({data}) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
  return (
    <Stack direction={"column"} sx={{
        boxShadow:1,
        border:"1px solid #ddd",
        flex:1,
        borderRadius:2,
    }}>
        <Box sx={{
        borderRadius:2,
        padding:2,
        }}>
            <Typography component={"h4"} sx={{
                fontSize:"25px",
                fontWeight:900,
                textAlign:"center",
                pb:1
            }}>Get in Touch</Typography>
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
                        <FormControl>
                            <Typography>Visit Type</Typography>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                sx={{
                                    ...dFlex,
                                }}
                                
                            >
                                <FormControlLabel value="online" control={<Radio />} label="Online" />
                                <FormControlLabel value="Offline" control={<Radio />} label="Offline" />
                            </RadioGroup>
                        </FormControl>

                        <Button variant={"text"} sx={{
                            border:"1px solid #ddd"
                        }}>
                            <Stack>
                                <ThreeSixtyRoundedIcon/>
                                <Typography>Virtual Tour</Typography>
                            </Stack>
                        </Button>
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