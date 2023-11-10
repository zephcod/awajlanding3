'use client'
import appwriteAuthService from '@/db/appwrite_auth';
import React, {useEffect, useState} from 'react'

const Home = () => {
  const [user, setUser] = useState(false)
  
  useEffect(()=>{
    (async () => {
      const ustat = await appwriteAuthService.isLoggedIn()
      setUser(ustat)
    })()
  },[])

 const res = JSON.stringify(user);
 if(!user) return<div>loading...</div>
  return (
    <div className='pt-14 items-center text-center'>{res}</div>
  )
}

export default Home