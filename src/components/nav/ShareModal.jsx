import { Close, FacebookOutlined, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Button, IconButton, Modal, Paper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { dFlex } from '../../theme/commonStyles'

const ShareModal = ({open, setOpen}) => {
  const handleClose = ()=>{
    setOpen(!open)
  }
  const [isCopied, setIsCopied] = useState(false);
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard("livoto.netlify.app/")
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius:2,
            boxShadow: 24,
            p: 4,
        }}>
            <Box sx={{width:"100%", ...dFlex, justifyContent:"flex-end", pb:5 }}>
                <IconButton onClick={()=>{
                    setOpen(!open)
                }}>
                    <Close/>
                </IconButton>
            </Box>
            <Paper>
                <Stack sx={{
                    width:"100%",
                    px:2,
                    py:1,
                    alignItems:"center"
                }}>
                    <Stack sx={{
                        flex:1
                    }}>
                        <Typography textTransform={"lowercase"}>livoto.netlify.app/</Typography>
                    </Stack>
                    <Button variant='outlined' onClick={handleCopyClick} color={"primary"}>
                    {isCopied ? 'Copied!' : 'Copy'}
                    </Button>
                </Stack>
            </Paper>
            <Stack sx={{alignItems:"center", py:2, justifyContent:"space-between"}}>
                <Typography>Share </Typography>
                <IconButton>
                    <FacebookOutlined/>
                </IconButton>
                <IconButton>
                    <BsWhatsapp size={"24px"}/>
                </IconButton>
                <IconButton>
                    <Twitter/>
                </IconButton>
                <IconButton>
                    <LinkedIn/>
                </IconButton>
            </Stack>
            {isCopied &&
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Thanks! for Sharing us
                </Typography>
            }
        </Box>
    </Modal>
  )
}

export default ShareModal