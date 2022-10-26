import React from 'react'
// import { Link } from "react-router-dom";

// import { AiFillTwitterSquare} from 'react-icons/ai';
import {BsDiscord,BsMedium,BsTwitter} from 'react-icons/bs';
import {FaTelegramPlane} from 'react-icons/fa';

function Header() {
  return (
    <div className='header'>
        <nav className="navbar navbar-expand-lg uppernav ">
        <div className="container-fluid">
        <div className="dropdown">
            <div>

            <button type="button" className="btn btn-danger nav-btn">SAFUU</button>

            </div>
            
          </div>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              
            
              
              <li className="nav-item">
                <a
                  className="nav-link active paper"
                  aria-current="page"
                  href="/"
                >
                  <BsTwitter size={"30px"} />
                </a>
              </li>
              &nbsp; &nbsp;
             
              <li className="nav-item">
                <a
                  className="nav-link active paper"
                  aria-current="page"
                  href="/"
                >
                  <BsDiscord size={"30px"}/>
                </a>
              </li>{" "} &nbsp; &nbsp;
              <li className="nav-item">
                <a
                  className="nav-link active paper"
                  aria-current="page"
                  href="/"
                >
                  <FaTelegramPlane size={"30px"} style={{backgroundColor:"011101",color:"white"}}/>
                </a>
              </li> &nbsp; &nbsp;
              
             
              <li className="nav-item">
                <a
                  className="nav-link active paper"
                  aria-current="page"
                  href="/"
                >
                  <BsMedium size={"30px"}/>
                </a>
              </li>
              &nbsp; 
              
            </ul> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-danger nav-btn1">SAFUU</button> &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-danger nav-btn2">Connect Wallet</button>
          </div>

        </div>
      </nav>
      
    </div>
  )
}

export default Header