import {Grid,Typography,TextField, Button,Backdrop,CircularProgress} from '@mui/material'

function InputPage({userRef,handleRequest,open}){
    return <>
        <Grid item container justifyContent="center" alignContent="space-around" style={{minHeight:"10em",border:"8px solid #2DA44E",borderRadius:"1%"}}>
        <Grid item >
          <Typography align="center" style={{fontWeight:"900"}} color="#2DA44E">
            Enter Github Username
          </Typography>
        </Grid>
        <Grid item style={{width:"90%"}}>
          <TextField inputRef={userRef} size="small" style={{width:"100%"}}/>
        </Grid>
        <Grid item>
          <Button variant='outlined' style={{color:"#2DA44E",borderColor:"#2DA44E"}} onClick={handleRequest}>Submit</Button>
        </Grid>
      </Grid>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
}

export default InputPage