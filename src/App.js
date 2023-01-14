import {Grid,useMediaQuery,Typography,TextField, Button} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import { useState } from 'react'

function App() {

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Grid container alignItems="center" justifyContent="center" style={{minHeight:"100vh"}}>
      <Grid item justifyContent="center" alignContent="space-around" container style={{minHeight:"10em",border:"8px solid #2DA44E",width:"20em",borderRadius:"5%"}}>
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

export default App;