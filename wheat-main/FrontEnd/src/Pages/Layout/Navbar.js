import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo3 from "./Logo.png";

import {
 
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineUser,
  AiOutlineSplitCells,
  AiOutlineShoppingCart,
  AiOutlineWhatsApp,
  AiOutlineMergeCells,
} from "react-icons/ai";

// AiOutlineImport   LOGIN
// import Swal from 'sweetalert2';


export default function Navbar({ isLog, updateIsLog }) {
  
  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     fontWeight: isActive ? "bold" : "normal",
  //  color: isActive ? "red" : "black",
  //   };
  // };
  
  
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
    <div className="container-fluid  py-2 border-bottom d-none d-lg-block" dir="rtl" lang="ar">
      <div className="container">
        <div className="row">
        
          <div className="col-md-6 text-center text-lg-end pt-3">
            <div className="d-inline-flex align-items-center">
              <Link className="text-body px-2"   to="https://www.instagram.com/fcdcharity/"  target="_blank">
              <AiOutlineInstagram style={{color:"#e6cc9f"}} className='social' />
              </Link>
              <Link className="text-body px-2"  to="https://www.facebook.com/fcdcharity/?locale=ar_AR"  target="_blank">
              <AiOutlineFacebook  style={{color:"#e6cc9f"}} className='social' />
              </Link>
              <Link className="text-body px-2"  to="https://www.facebook.com/fcdcharity/?locale=ar_AR"  target="_blank">
              <AiOutlineWhatsApp  style={{color:"#e6cc9f"}} className='social' />
              </Link>
             
             
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-start pt-3 mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">

            {localStorage.auth == null ? (
              <>
              {/* <Link className="text-body px-2" to="ShoppingCart" >
            <AiOutlineShoppingCart style={{color:"#e6cc9f"}} className='social' />
              </Link> */}
             
              <Link className="text-body px-2" to="/Login" >
              <AiOutlineMergeCells style={{color:"#e6cc9f"}} className='social' />
              </Link>
              </>
                 ) : (
                  <>
            <Link className="text-body px-2" to="ProfileUser" >
            <AiOutlineUser style={{color:"#e6cc9f"}} className='social' />
              </Link>
         
              {/* <Link className="text-body px-2" to="ProfileUser" >
            <AiOutlineShoppingCart style={{color:"#e6cc9f"}} className='social' />
              </Link> */}
         
              <Link className="text-body px-2" to="/" onClick={handleLogOut} >
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

    {/* Responsive Topbar Start */}
    <div className="container-fluid  py-2 border-bottom d-lg-none bg-light" dir="rtl" lang="ar">
      <div className="container">
        <div className="row">
        
          <div className="col-6 text-end">
            <div className="d-inline-flex align-items-center">
              <Link className="text-body px-2"   to="https://www.instagram.com/fcdcharity/"  target="_blank">
              <AiOutlineInstagram style={{color:"#e6cc9f"}} className='social' />
              </Link>
              <Link className="text-body px-2"  to="https://www.facebook.com/fcdcharity/?locale=ar_AR"  target="_blank">
              <AiOutlineFacebook  style={{color:"#e6cc9f"}} className='social' />
              </Link>
            </div>
          </div>
          <div className="col-6 text-start">
            <div className="d-inline-flex align-items-center">
            {localStorage.auth == null ? (
              
              <Link className='nav-link' style={{color:"#e6cc9f"}} to="/Sigin/user"> <h5 > تسجيل دخول </h5></Link> 
                 ) : (
                  <>
            <Link className="text-body px-2" to="ProfileUser" >
            <AiOutlineUser style={{color:"#e6cc9f"}} className='social' />
              </Link>
         
         
              <Link className="text-body px-2" to="/" onClick={handleLogOut} >
              <AiOutlineSplitCells style={{color:"#e6cc9f"}} className='social' />
              </Link>
              </>
              )}   
            </div>
          </div>
          
        </div>
      </div>
    </div>
    {/* Responsive Topbar End */}

     {/* Navbar Start */}
  <div className="container-fluid sticky-top py-0 Navbar bg-white shadow-sm" dir="rtl" lang="ar">
    <div className="container">
    
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
     
     
       
        <div className="collapse navbar-collapse"   id="navbarCollapse">
       
          <div className="navbar-nav ms-auto py-0">
            <a > 
            <Link className="nav-item nav-link active"  to="/">الرئيسية</Link> 
            </a>
            <a > 
            <Link className="nav-item nav-link "to="About">  من نحن</Link> 
            </a>
            
{/* 
            <a > 
            <Link className="nav-item nav-link " to="MyDrug">الاطعمه المسموحة</Link> 
            </a>
            */}

           
           
            <div className="nav-item dropdown">
              <a
                data-bs-toggle="dropdown"
              >
                    <Link  className="nav-link dropdown-toggle " to="Home">خدماتنا</Link> 
                
              </a>
              <div className="dropdown-menu m-0">
                {/* <a>
                <Link  className="dropdown-item" to="Name"> سؤال و جواب</Link> 
                </a> */}

                <a>
                <Link  className="dropdown-item" to="Drug">  أدوية </Link> 
                </a>

                <a>
                <Link  className="dropdown-item" to="Recipes">   أفضل الوصفات </Link> 
                </a>

                <a>
                <Link  className="dropdown-item" to="Food"> ألاطعمه المسموحه</Link> 
                </a>

                <a>
                <Link  className="dropdown-item" to="Seminar"> الورشات و الندوات  </Link> 
                </a>
              
              
              </div>
            </div>
            <a > 
            <Link className="nav-item nav-link " to="Contact" >  تواصل معنا</Link> 
            </a>
           
          </div>
        </div>
        <Link to="/" className="navbar-brand">
         
         <img
            className="img-Logo3 m-0 text-uppercase"
       
           src={Logo3}
           alt=""
         />
       
       </Link>
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
  
  );
}