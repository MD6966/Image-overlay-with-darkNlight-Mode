import { Box, Grid } from '@mui/material'
import React from 'react'
import './app.css'
import ContactForm from './ContactForm'
const Contact = () => {
  return (
    <div id="contact" className='contact'>
      <Box style={{
        padding:'10%'
      }}>
         <Grid container>
          <Grid item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          >
            Grid 1
          </Grid>
          <Grid item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          >
            <ContactForm /> 
          </Grid>

         </Grid>
      </Box>
    </div>
  )
}

export default Contact
