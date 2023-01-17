import {Grid,useMediaQuery,Typography,Pagination} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import { useState,useEffect } from 'react'

function MainPage({userData,setOpen,open}) {
  const [repos,setRepos] = useState(userData.repositories.slice(0,9))
  
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    setRepos(userData.repositories.slice(0,10>userData.repositories.length?userData.repositories.length:10))
    
    setOpen(false)
  }, [userData])
  

  const handleChange = (e,v) => {
    setRepos(userData.repositories.slice(v*10-10,v*10>userData.repositories.length?userData.repositories.length:v*10))
  }

  return (
    <Grid container justifyContent="center" style={{marginTop:"3em"}}>
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

      {/* repos */}
      <Grid item container justifyContent="center" style={{marginTop:"2em"}}>
        {
          repos.map((v,ind) => <Grid onClick={()=>window.open(v.git_url.replace("git","https"),'_blank')} container direction="column" alignItems="center" justifyContent="space-between" key={ind} style={{border:"solid #2DA44E",boxShadow:"10px 10px 5px lightblue",minHeight:"5em",marginTop:"1em",marginLeft:matchesSM?"0em":matchesMD?"2em":"3em",width:matchesSM?"20em":matchesMD?"23em":"30em"}}>
            <Grid item style={{padding:"1em 1em 0em 1em",width:"100%"}}>
              <Typography variant="h5" style={{fontWeight:600,marginLeft:"0.2em",width:"100%"}}>
                {v.name}
              </Typography>
              <Typography variant="body2" style={{marginLeft:"0.4em",height:"50%"}}>
                {v.description}
              </Typography>
            </Grid>
            <Grid item container alignItems="flex-end" style={{width:matchesSM?"18em":matchesMD?"21em":"28em",paddingBottom:"1em"}}>
                <Grid item style={{backgroundColor:"#2DA44E",borderRadius:"4%",marginLeft:"0.4em",marginTop:"0.7em",maxHeight:"1.6em"}}>
                  <Typography align='center' color="white" style={{paddingLeft:"0.4em",paddingRight:"0.4em"}}>
                    {v.language}
                  </Typography>
                </Grid>
            </Grid>
          </Grid>)
        }
      </Grid>
      <Pagination style={{marginTop:"3em",marginBottom:"3em"}} count={userData.repositories.length % 10 === 0?parseInt(userData.repositories.length/10,10):parseInt(userData.repositories.length/10+1,10)} onChange={(e,v)=>handleChange(e,v)}/>
    </Grid>
  );
}

export default MainPage;