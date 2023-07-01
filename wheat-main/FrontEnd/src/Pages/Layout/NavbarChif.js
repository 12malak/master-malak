import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo3 from "./Logo.png";

import {
 
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineUser,
  AiOutlineSplitCells,
} from "react-icons/ai";

const NavbarChif = ({ isLog, updateIsLog }) => {
  function handleLogOut() {

    localStorage.setItem("SignStatus", "signUp");

          localStorage.removeItem("auth");
          localStorage.removeItem("roles");
          localStorage.removeItem("userid");
          localStorage.removeItem("curruntUser");
          window.location.reload(); // Reload the site after logging out
          // console.log( localStorage.removeItem("auth"));
 }  
  return (
    <>
        {/* Topbar Start */}
        <div className="container-fluid py-2 border-bottom" dir="rtl" lang="ar">
  <div className="container">
    <div className="row justify-content-between">
    
      <div className="col-6 text-end">
        <div className="d-inline-flex align-items-center">
          <Link className="text-body px-2" to="https://www.instagram.com/fcdcharity/" target="_blank">
            <AiOutlineInstagram style={{color:"#e6cc9f"}} className='social' />
          </Link>
          <Link className="text-body px-2" to="https://www.facebook.com/fcdcharity/?locale=ar_AR" target="_blank">
            <AiOutlineFacebook style={{color:"#e6cc9f"}} className='social' />
          </Link>
        </div>
      </div>
      <div className="col-6 text-start">
        <div className="d-inline-flex align-items-center">
          {localStorage.auth == null ? (
            <Link className='nav-link' style={{color:"#e6cc9f"}} to="/Sigin/user"> 
              <h5>تسجيل دخول</h5>
            </Link> 
          ) : (
            <>
              <Link className="text-body px-2" to="ProfileChef">
                <AiOutlineUser style={{color:"#e6cc9f"}} className='social' />
              </Link>
              <Link className="text-body px-2" to="/" onClick={handleLogOut}>
                <AiOutlineSplitCells style={{color:"#e6cc9f"}} className='social' />
              </Link>
            </>
          )}
        </div>
      </div>
      
    </div>
  </div>
</div>
    {/* Topbar End */}

     {/* Navbar Start */}
  <div className="container-fluid sticky-top bg-white shadow-sm" dir="rtl" lang="ar">
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a > 
            <Link className="nav-item nav-link active"  to="/">الرئيسية</Link> 
            </a>
            <a > 
            <Link className="nav-item nav-link "to="About">  من نحن</Link> 
            </a>
            

            <a > 
            <Link className="nav-item nav-link " to="Contact" >  تواصل معنا</Link> 
            </a>

{/* 
            <a > 
            <Link className="nav-item nav-link " to="EdetCardChef" >   EdetCardChef</Link> 
            </a> */}
           
          </div>
        </div>
        <a href="index.html" className="navbar-brand">
         
          <img
             className="img-Logo3 m-0 text-uppercase"
        
            src={Logo3}
            alt=""
          />
        
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
    </>
  )
}

export default NavbarChif
