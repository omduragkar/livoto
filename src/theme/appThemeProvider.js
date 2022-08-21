import { blue, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material";
const theme = createTheme({
    typography:{
        allVariants:{
            fontFamily:"Raleway",
            textTansform:"none",
            fontSize:15
        }
    }, 
    palette:{
        primary:{
            main:grey[700]
        },
        secondary:{
            main:blue[400]
        }
    },
    components:{
        MuiTypography:{
            defaultProps:{
                variant:"subtitle2",
                textTransform:'capitalize'
            },
            styleOverrides:{
                h3:{
                    fontWeight:"bolder",
                    fontSize:"24px"
                }
            }
        },
        MuiButton:{
            defaultProps:{
                sx:{
                },
                disableRipple:true,
                size:"small",
                variant:"text"

            },
        },
        MuiStack:{
            defaultProps:{
                direction:"row",
                spacing:2,
            }
        },
        MuiTab:{
            defaultProps:{
                disableRipple:true
            }
        },
        MuiLink:{
            defaultProps:{
                sx:{
                    color:theme=>theme.palette.primary.main
                },
                underline:"none"
            }
        }
    }
})


export default theme