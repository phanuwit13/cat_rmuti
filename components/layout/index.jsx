import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {action}  from '../../actions';

function Layout(props) {

  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [disableLogin,setDisableLogin]=useState(true)
  const [checkLogin,setCheckLogin]=useState(false)
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastname]=useState('')





  const router = useRouter()

  const handleLogin=async()=>{
    let response = await action.Login(username,password)
    if(response.success){
      window.localStorage.setItem('user',JSON.stringify(response.data))
    }else{
      alert(response.message)
    }
    
    OncheckLogin()
  }

  useEffect(()=>{
    if(username !== '' &&password!== '' ){
      setDisableLogin(false)
    }else{
      setDisableLogin(true)
    }

  },[username,password])

  const OncheckLogin = ()=>{
    let user = JSON.parse(window.localStorage.getItem('user'))
    if(user){
      setFirstName(user.firstName)
      setLastname(user.lastName)
      setCheckLogin(true)
    }else{
      setCheckLogin(false)
    }
  }

  useEffect(()=>{
    OncheckLogin()
  },[])


  return (
    <div>
      <div style={{width:'100%',height:'200px',display:'flex', justifyContent:'center',alignItems:'center'}}>สวัสดี</div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link href="/">
    <span className="navbar-brand" >Index</span>
    </Link>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link href="/cat">
          <span className={router.pathname==='/cat'? 'nav-link active':'nav-link ' } aria-current="page" >Cat</span>
          </Link>
        </li>
        <li className="nav-item">
        <Link href="/about">
        <span className={router.pathname==='/about'? 'nav-link active':'nav-link ' } href="/about">About</span>
        </Link>
  
        </li>
      </ul>
      <div className="d-flex">
        {checkLogin ? (<><span>{firstName+" "+lastName}</span> <button className="btn btn-outline-success" onClick={()=>{window.localStorage.clear();OncheckLogin()}} >LogOut</button></>):
        <>
        <input className="form-control me-2" value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="username" aria-label="Search" />
      <input className="form-control me-2"  value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="password" aria-label="Search" />
      <button disabled={disableLogin} className="btn btn-outline-success" onClick={()=>{handleLogin()}} >Login</button>
        </>}
      
    </div>
    </div>
  </div>
</nav>
        </div>

        {props.children}

    </div>
  )
}

export default Layout
