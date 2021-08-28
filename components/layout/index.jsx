import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Layout(props) {

  const router = useRouter()

  return (
    <div>
      <div style={{width:'100%',height:'200px',display:'flex', justifyContent:'center',alignItems:'center'}}>สวัสดี</div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link href="/">
    <a className="navbar-brand" >Index</a>
    </Link>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link href="/cat">
          <a className={router.pathname==='/cat'? 'nav-link active':'nav-link ' } aria-current="page" >Cat</a>
          </Link>
        </li>
        <li className="nav-item">
        <Link href="/about">
        <a className={router.pathname==='/about'? 'nav-link active':'nav-link ' } href="/about">About</a>
        </Link>
  
        </li>
      </ul>
      {/* <form className="d-flex">
      
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
        </div>

        {props.children}

    </div>
  )
}

export default Layout
