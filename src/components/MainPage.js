import {Grid,Pagination} from '@mui/material'
import { useState,useEffect } from 'react'
import UserInfo from './UserInfo'
import UserRepos from './UserRepos'

function MainPage({userData,setOpen,open}) {
  const [repos,setRepos] = useState(userData.repositories.slice(0,9))

  useEffect(() => {
    setRepos(userData.repositories.slice(0,10>userData.repositories.length?userData.repositories.length:10))
    
    setOpen(false)
  }, [userData])
  

  const handleChange = (e,v) => {
    setRepos(userData.repositories.slice(v*10-10,v*10>userData.repositories.length?userData.repositories.length:v*10))
  }

  return (
    <Grid container justifyContent="center" style={{marginTop:"3em"}}>
      <UserInfo userData={userData}/>
      <UserRepos repos={repos}/>
      <Pagination style={{marginTop:"3em",marginBottom:"3em"}} count={userData.repositories.length % 10 === 0?parseInt(userData.repositories.length/10,10):parseInt(userData.repositories.length/10+1,10)} onChange={(e,v)=>handleChange(e,v)}/>
    </Grid>
  );
}

export default MainPage;