import AskUser from './components/AskUser'
import MainPage from './components/MainPage'
import {Grid,useMediaQuery,Typography,TextField, Button,Backdrop,CircularProgress} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import { useRef, useState } from 'react'

function App() {
  const userRef = useRef()
  const [userData,setData] = useState()
  const [open, setOpen] = useState(false);

  const handleRequest = async (e) => {
    setOpen(true)
    const user = userRef.current.value
    const response = await fetch(`${process.env.REACT_APP_SERVER}/user/${user}`)
    const data = await response.json();
    setData(data)
    console.log(data)
  }

  return (
    <>
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
      {userData && <MainPage userData = {userData} setOpen={setOpen} open={open}/>}
    </>
  );
}

export default App;