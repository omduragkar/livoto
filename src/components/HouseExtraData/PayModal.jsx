import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { IconButton, Modal, Stack, useMediaQuery } from '@mui/material';
import { Global } from '@emotion/react';
import PayButton from './PayButton';
import {  CloseOutlined } from '@mui/icons-material';
import {  dFlex, flexBetweenCenter } from '../../theme/commonStyles';


const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const PayModal = ({open, handleOpen}) => {
    
    const matches = useMediaQuery("(max-width:900px)")
    return (
        <Box>
            {matches ? 
                <Root>
                    <Global
                        styles={{
                        '.MuiDrawer-root > .MuiPaper-root': {
                            height: `calc(80% - ${drawerBleeding}px)`,
                            overflow: 'visible',
                        },
                        }}
                    />
                    <SwipeableDrawer
                        anchor="bottom"
                        open={open}
                        onClose={()=>handleOpen(false)}
                        onOpen={()=>handleOpen(true)}
                        swipeAreaWidth={drawerBleeding}
                        disableSwipeToOpen={true}
                    >
                        <StyledBox
                        sx={{
                            position: 'absolute',
                            top: -drawerBleeding,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            visibility: 'visible',
                            right: 0,
                            left: 0,
                        }}
                        >
                        <Puller />
                        <Stack sx={{
                            ...flexBetweenCenter,
                            width:"100%",
                            justifyContent:"space-between !important",
                        }}>
                            <Typography sx={{ p: 2, color: 'text.secondary' }}>Enquiry Form</Typography>
                            <IconButton onClick={()=>handleOpen(false)}>
                                <CloseOutlined/>
                            </IconButton>
                        </Stack>
                        </StyledBox>
                        <StyledBox
                        sx={{
                            pt:1,
                            pb: 2,
                            height: '100%',
                            overflow: 'auto',
                        }}
                        >
                        {/* <Skeleton variant="rectangular" height="100%" /> */}
                        <PayButton/>
                        </StyledBox>
                    </SwipeableDrawer>
                </Root>
            :
                <Modal
                open={open}
                onClose={()=>handleOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
                >
                    
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: {
                            xs:"50%",
                            lg:"60%",
                            md:"90%"
                        },
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: {
                            md:1,
                            lg:4
                        },
                    }}>
                        <Box sx={{...dFlex, justifyContent:"flex-end"}}>
                            <IconButton onClick={()=>handleOpen(false)}><CloseOutlined/></IconButton>
                        </Box>
                        <PayButton/>
                    </Box>
                </Modal>
            }
        </Box>
    

    )
}

export default PayModal



    

