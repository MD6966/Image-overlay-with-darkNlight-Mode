import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import NavBarLinks from './layouts/Landing/NavBarLinks'
import {useScrollTrigger} from '@mui/material'


const Header = () => {
  const trigger = useScrollTrigger({
  
  })
  return (
    <div>
      <AppBar position='fixed' 
      sx={{bgcolor: trigger ? '#000' : 'transparent'}}>
        <Toolbar>
          <Typography>
            Hello Jee
          </Typography>
          <Box style={{marginLeft:'auto'}}>
            <NavBarLinks /> 
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
