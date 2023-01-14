import {Grid,useMediaQuery,Typography,TextField, Button} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import { useState } from 'react'

function App() {

  const dummy = [{
    reponame: "Heroes",
    description:"Heroes description goes here",
    tags:["javascript","angular","angular.js","Angular 2+"]
  },{
    reponame: "Heroes",
    description:"Heroes description goes here",
    tags:["javascript","angular","angular.js","Angular 2+"]
  },{
    reponame: "Heroes",
    description:"Heroes description goes here",
    tags:["javascript","angular","angular.js","Angular 2+"]
  },{
    reponame: "Heroes",
    description:"Heroes description goes here",
    tags:["javascript","angular","angular.js","Angular 2+"]
  }]

  return (
    <Grid container>
      <Grid container>
        <Grid item>
          {/* image */}
        </Grid>
        <Grid item container direction = "column">
          <Grid item>
            {/* Name */}
          </Grid>
          <Grid item>
            {/* Bio */}
          </Grid>
          <Grid item container>
            <Grid item>
              {/* location image */}
            </Grid>
            <Grid item>
              {/* location name */}
            </Grid>
          </Grid>
          <Grid item>
            {/* Twitter */}
          </Grid>
        </Grid>
      </Grid>
      {/* github link */}
      <Grid item container>
        <Grid item>
          {/* link image */}
        </Grid>
        <Grid item>
          {/* link */}
        </Grid>
      </Grid>
      <Grid item container>
        
      </Grid>
    </Grid>
  );
}

export default App;