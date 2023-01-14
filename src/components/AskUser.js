import {Grid,useMediaQuery,Typography,TextField, Button} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import { useState } from 'react'

function AskUser({setUser}) {

  const handleRequest = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER}}`)
    const data = await response.json();
    console.log(data)
    setUser(data)
  }

  return (
    <Grid container alignItems="center" justifyContent="center" style={{minHeight:"100vh"}}>
      <Grid item container justifyContent="center" alignContent="space-around" style={{minHeight:"10em",border:"8px solid #2DA44E",width:"20em",borderRadius:"5%"}}>
        <Grid item >
          <Typography align="center" style={{fontWeight:"900"}} color="#2DA44E">
            Enter Github Username
          </Typography>
        </Grid>
        <Grid item style={{width:"90%"}}>
          <TextField size="small" style={{width:"100%"}}/>
        </Grid>
        <Grid item>
          <Button variant='outlined' style={{color:"#2DA44E",borderColor:"#2DA44E"}}>Submit</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AskUser;