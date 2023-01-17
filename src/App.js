import MainPage from './components/MainPage'
import {Grid,Typography} from '@mui/material'
import { useRef, useState } from 'react'
import InputPage from './components/InputPage'

function App() {
  const userRef = useRef()
  const [userData,setData] = useState()
  const [open, setOpen] = useState(false);
  const [error,setError] = useState() 

  const handleRequest = async (e) => {
    setOpen(true)
    const user = userRef.current.value
    if(user.length == 0){
      setError({error:"no data"})
      setOpen(false)
      return;
    }
    const response = await fetch(`${process.env.REACT_APP_SERVER}/user/${user}`)
    const data = await response.json();
    data.error ? setError(data):setData(data)
  
    if(data.error){
      setOpen(false)
      setData(null)
    }else{
      setError(undefined)
    }
  }

  return (
    <>
      <InputPage userRef={userRef} handleRequest={handleRequest} open={open}/>
      {userData && <MainPage userData = {userData} setOpen={setOpen} open={open}/>}
      {error && <Grid container justifyContent="center" style={{marginTop:"2em"}}><Typography style={{fontSize:"2em",fontWeight:600,color:"red",textShadow:"2px 1.5px 3.4px red"}}>{error.error === "no data"?<>Enter Username</>:<>Invalid Username</>}</Typography></Grid>}
    </>
  );
}

export default App;