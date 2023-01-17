import {Grid,Typography,useMediaQuery,useTheme} from '@mui/material'

function UserInfo({userData}){
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

    return <>
        <Grid container direction={matchesSM?"column":"row"} alignItems={matchesSM?"center":undefined} justifyContent={matchesSM?undefined:"space-around"}>
        <Grid item>
          <img src={userData.avatar_url} style={{borderRadius:"100%",height:"10em",border:"5px solid #2DA44E"}} alt="user avatar"/>
        </Grid>
        <Grid item container direction = "column" style={{maxWidth:"15em"}} alignItems={matchesSM?"center":undefined}>
          <Grid item>
            <Typography color="black" style={{fontWeight:600}} variant="h4">
              {userData.name !== null? userData.name:userData.login}
            </Typography>
          </Grid>
          <Grid item style={{marginTop:"0.5em"}}>
            <Typography>
              {userData.bio != null ? userData.bio:"Empty Bio"}   
            </Typography>
          </Grid>
          <Grid item container justifyContent={matchesSM?"center":"flex-start"} alignItems="center" style={{marginTop:"0.5em"}}>
            <Grid item>
              <img src='location.jpg' style={{height:"1.6em"}}/>
            </Grid>
            <Grid item style={{marginLeft:"0.5em"}}>
              <Typography>
                {userData.location != null ? userData.location:"No Location Data"}
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{marginTop:"0.5em"}}>
            <Typography>
              {userData.twitter_username?<>Twitter: https://twitter.com/{userData.twitter_username}</>:"No Twitter Data"}
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
          {userData.html_url}
        </Grid>
      </Grid>
    </>
}

export default UserInfo