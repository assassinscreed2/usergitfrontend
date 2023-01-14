import {Grid,useMediaQuery,Typography,Pagination} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import { useState } from 'react'

function App() {
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

  const dummy = [{
    reponame: "Heroes",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam libero, placerat a hendrerit at, ultrices et sapien. Donec ornare sem tellus, quis dignissim risus dapibus ut. Suspendisse finibus velit velit, et tristique massa gravida vitae. Mauris laoreet tortor sem, interdum suscipit lectus aliquet nec. Vestibulum libero arcu placerat.",
    tags:["javascript","angular","angular.js","Angular 2+"]
  },{
    reponame: "Heroes",
    description:"Heroes description goes hereHeroes description goes hereHeroes description goes  hereHeroes description goes hereHeroes description goes hereHeroes description goes hereHeroes description goes here",
    tags:["javascript","angular","angular.js","Angular 2+"]
  },{
    reponame: "Heroes",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam libero, placerat a hendrerit at, ultrices et sapien. Donec ornare sem tellus, quis dignissim risus dapibus ut. Suspendisse finibus velit velit, et tristique massa gravida vitae. Mauris laoreet tortor sem, interdum suscipit lectus aliquet nec. Vestibulum libero arcu placerat.",
    tags:["javascript","angular","angular.js","Angular 2+"]
  },{
    reponame: "Heroes",
    description:"No Description",
    tags:["javascript","angular","angular.js","Angular 2+"]
  },{
    reponame: "Heroes",
    description:"No Description",
    tags:["javascript","angular","angular.js","Angular 2+"]
  },{
    reponame: "Heroes",
    description:"No Description",
    tags:["javascript","angular","angular.js","Angular 2+"]
  },{
    reponame: "Heroes",
    description:"No Description",
    tags:["javascript","angular","angular.js","Angular 2+"]
  }]

  return (
    <Grid container>
      <Grid container direction={matchesSM?"column":"row"} alignItems={matchesSM?"center":undefined} justifyContent={matchesSM?undefined:"space-around"}>
        <Grid item>
          <img src='defaultImage.jpg' style={{borderRadius:"100%",height:"10em"}}/>
        </Grid>
        <Grid item container direction = "column" style={{maxWidth:"15em"}} alignItems={matchesSM?"center":undefined}>
          <Grid item>
            <Typography color={matchesSM?"red":matchesMD?"yellow":"black"} variant="h4">
              John Doe
            </Typography>
          </Grid>
          <Grid item style={{marginTop:"0.5em"}}>
            <Typography>
              Bio goes here   
            </Typography>
          </Grid>
          <Grid item container justifyContent={matchesSM?"center":"flex-start"} alignItems="center" style={{marginTop:"0.5em"}}>
            <Grid item>
              <img src='location.jpg' style={{height:"1.6em"}}/>
            </Grid>
            <Grid item style={{marginLeft:"0.5em"}}>
              <Typography>
                Gwalior
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{marginTop:"0.5em"}}>
            <Typography>
              Twitter: https://twitter.com/user
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* github link */}
      <Grid item container justifyContent={matchesSM?"center":"flex-start"} style={{marginTop:"1em",marginLeft:matchesSM?"0em":matchesMD?"8.3em":"17em"}}>
        <Grid item>
          <img src='link.png' style={{height:"0.7em"}}/>
        </Grid>
        <Grid item style={{marginLeft:"0.8em"}}>
          https://github.com/jogn
        </Grid>
      </Grid>

      {/* repos */}
      <Grid item container justifyContent="center" style={{marginTop:"2em"}}>
        {
          dummy.map((v,ind) => <Grid container direction="column" alignItems="center" justifyContent="space-between" key={ind} style={{border:"solid #2DA44E",minHeight:"5em",marginTop:"1em",marginLeft:matchesSM?"0em":matchesMD?"2em":"3em",width:matchesSM?"20em":matchesMD?"23em":"30em"}}>
            <Grid item style={{padding:"1em 1em 0em 1em",width:"100%"}}>
              <Typography variant="h5" style={{fontWeight:600,marginLeft:"0.2em",width:"100%"}}>
                {v.reponame}
              </Typography>
              <Typography variant="body2" style={{marginLeft:"0.4em",height:"50%"}}>
                {v.description}
              </Typography>
            </Grid>
            <Grid item container alignItems="flex-end" style={{width:matchesSM?"18em":matchesMD?"21em":"28em",paddingBottom:"1em"}}>
                {v.tags.map((tag,index) => <Grid item style={{backgroundColor:"#2DA44E",borderRadius:"4%",marginLeft:"0.4em",marginTop:"0.7em",maxHeight:"1.6em"}}>
                  <Typography align='center' color="white" style={{paddingLeft:"0.4em",paddingRight:"0.4em"}}>javascript</Typography>
                </Grid>)}
            </Grid>
          </Grid>)
        }

        
      </Grid>
    </Grid>
  );
}

export default App;