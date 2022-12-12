import { Box, Button, Input, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import './app.css'
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
const ContactForm = () => {
  return (
    <div>
      <Box className='contact-box'>
        <Typography className='contact-header'>
        Contact Me 
        </Typography>
        <TextField  
        placeholder='Name'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon style={{fontSize:'2rem'}} />
            </InputAdornment>
          ),
        }}
       variant='standard' fullWidth  style={{marginTop:'5px'}}/> 
       <TextField  
        placeholder='Email'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon style={{fontSize:'2rem'}} />
            </InputAdornment>
          ),
        }}
       variant='standard' fullWidth  style={{marginTop:'5px'}}/> 
        <TextField  
        placeholder='Message'
        multiline
        rows={4}
       variant='standard' fullWidth  style={{marginTop:'5px'}}/> 
        {/* <TextField label='Email'  fullWidth style={{marginTop:'5px'}} />  */}
        {/* <TextField label='message'  fullWidth multiline rows={5} style={{marginTop:'5px'}}/>  */}
       
        <Button variant='contained' fullWidth style={{marginTop:'10px'}}> Send </Button>
        
      </Box>
    </div>
  )
}

export default ContactForm
