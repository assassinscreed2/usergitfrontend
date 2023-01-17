import {Grid,Typography,useMediaQuery,useTheme} from '@mui/material'

function UserRepos({repos}){
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

    return <>
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
    </>
}

export default UserRepos