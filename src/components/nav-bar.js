// import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="/">z a c k _ a d a m s</a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <div style={{textAlign: "center"}} className="nav navbar-nav navbar-right">
            <Link to="/"><button className="navbar-btn btn btn-default btn-md" type="button" >Home</button></Link>
            <Link to="/work"><button className="navbar-btn btn btn-default btn-md" type="button" >Work</button></Link>
            <Link to="/portfolio"><button className="navbar-btn btn btn-default btn-md" type="button" >Portfolio</button></Link>
            <Link to="/resume"><button className="navbar-btn btn btn-default btn-md" type="button" >Resume</button></Link>
            {/* <Link to="/blog"><button className="navbar-btn btn btn-default btn-md" type="button" >Blog</button></Link> */}
            <Link to="/contact"><button className="navbar-btn btn btn-default btn-md" type="button" >Contact</button></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
