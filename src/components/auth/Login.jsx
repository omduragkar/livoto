
import { Box, Button,  CssBaseline, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { dFlex, flexCenter } from '../../theme/commonStyles'
const Login = ({admin}) => {
  return (
    
        <Stack sx={{
        // border:"2px solid yellow",
        flex:1,
        ...dFlex,
        justifyContent:"center",
        alignItems:"center",
        p:{
            xs:1,
            md:0
        },pb:15,
        overflowY:{
            xs:"scroll",
            md:"hidden"
        },
        }}>
            <CssBaseline/>
            <Stack sx={{
                justifyContent:"center",
                alignItems:"center",
                border:{
                    xs:"0px",
                    md:"2px solid #ddd"},
                borderRadius:3,
                p:{
                xs:2,
                },
                flexDirection:{
                xs:"column",
                md:"row"
                },
                height:{
                    xs:"100%",
                    md:"fit-content"
                },
            }}>
                <Typography sx={{
                display:{
                    xs:"block",
                    md:"none",
                }
                }} variant={"h3"} py={5} pt={15} color={"secondary"} textTransform={"capitalize"}>{!admin? "Login" : "Admin | Login "}</Typography>
                <Stack sx={{
                flexDirection:{
                    xs:"column",
                    md:"row-reverse",
                    gap:50
                },
                height:{
                    xs:"100%",
                    md:"fit-content"
                },
                marginLeft:"0px !important",
                }}>
                <Box sx={{
                    flex:1,
                    height:"100%",
                    width:{
                    xs:"100%"
                    },
                    marginLeft:"0px !important"
                    // border:"2px solid green"
                }}>
                    <Box sx={{
                    ...flexCenter,
                    flex:1,
                    height:"100%",
                    flexDirection:"column",
                    border:"2px solid #ddd",
                    borderRadius:3,
                    boxShadow:"4px 11px 29px -11px rgba(86,136,227,1)",
                    py:3
                    }}>

                    <Typography sx={{
                        display:{
                        xs:"none",
                        md:"block"
                        }
                    }} variant={"h3"} py={2} color={"secondary"} textTransform={"capitalize"}> {!admin? "Login" : "Admin | Login "}</Typography>
                    <Stack direction={"column"} sx={{
                        width:"100%",
                        px:{
                        xs:1,
                        md:5},
                        pb:3,
                        marginLeft:"0px !important",

                    }}>
                        <TextField fullWidth color={"secondary"} id="filled-basic" label="email" variant="filled" />
                        <TextField fullWidth color={"secondary"} id="filled-basic" label="password" variant="filled" />
                        {!admin && (<Typography color={"secondary"}>
                        New here?
                        <Link href='/user/auth/signup'>&nbsp;&nbsp;Register here</Link>
                        </Typography>)}
                        <Button variant='outlined' color={"secondary"} >Enter in</Button>
                    </Stack>
                    </Box>
                </Box>
                <Box sx={{
                    flex:1,
                    ...flexCenter,
                    pb:{
                        xs:25,
                        md:0

                    }
                    // border:"2px solid orange",
                }}>
                    <img width={"100%"} height={"100%"} src={"https://acad.xlri.ac.in/evening/images/login.svg"} alt={"loginImage"}/>
                </Box>
                </Stack>
                
                

            </Stack>

        </Stack>
  )
}

export default Login