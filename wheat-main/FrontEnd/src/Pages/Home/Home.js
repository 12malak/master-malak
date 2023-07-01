import React from 'react'
import './Home.css';
import '../Seminars/Seminar.css';
import { FaArrowRight } from "react-icons/fa";
import {FaPills} from "react-icons/fa";
import {FaStethoscope} from "react-icons/fa";
import {FaRegCommentDots} from "react-icons/fa";
import {FaUtensils} from "react-icons/fa";
import {FaCalendarAlt} from "react-icons/fa";
import {FaAppleAlt} from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
import hero3 from "./قمح333.jpg";
import hero from "./قمح4.jpg";
import hero2 from "./قممح.webp";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from 'react-bootstrap';
import Contact from './Contact';
import About from '../About-us/About';
export default function Home() {


  const [selectedType, setSelectedype] = useState("");
  const navigate = useNavigate();

  function handleTypeSelection(SignUpType) {
    setSelectedype(SignUpType);
    navigate(`/Sigin/${SignUpType}`);
  }




  return (
<div className='body1'>
 {/* Hero Start */}
 <div
    id="carouselExampleCaptions"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img   src={hero} className="d-block w-100" alt="..." style={{ height:"50rem" }}/>
        <div className="carousel-caption d-none d-md-block"style={{fontSize:"2rem" ,background:" rgba(148, 146, 146, 0.5)"}}>
          <h3>     أصدقاء مرضى حساسية القمح</h3>
          <p>
          نحن نسعى جاهدين لتقديم خدمة شاملة ومفيدة لمرضى حساسية القمح، وندعوكم للانضمام إلينا والاستفادة من خدماتنا ومشاركة وصفاتكم الصحية واللذيذة مع المجتمع.


         </p>
         <div className="pt-2 btn-home">
         {
              localStorage.auth == null ? (
                <>
         <Button
         style={{color:"red",border:"2px solid #e6cc9f" }}
           
            onClick={() => handleTypeSelection("user")}
         
            className="btn btn-outline-danger rounded-pill py-md-3 px-md-5 mx-2"
          >
           إنضم معنا
          </Button>
          <Button
          style={{ backgroundColor:"#e6cc9f" }}
            // to="Sigin"
            onClick={() => handleTypeSelection("beneficiary")}
            className="btn rounded-pill py-md-3 px-md-5 mx-2"
          >
            هل انت شيف ؟
          </Button>
          </>
              ) : null}
        </div>







        </div>
      </div>
      <div className="carousel-item">
        <img src={hero2} className="d-block w-100" alt="..." style={{ height:"50rem" }} />
        <div className="carousel-caption d-none d-md-block"style={{fontSize:"2rem" ,background:" rgba(148, 146, 146, 0.5)"}}>
          <h3>  120000</h3>
          <p>
          المرضى المستفيدين من خدمات ودورات وبرامج الجمعية 500 مريض بشكل دائم
         </p>
         <div className="pt-2 btn-home">
         {
              localStorage.auth == null ? (
                <>
         <Button
         style={{color:"red",border:"2px solid #e6cc9f" }}
           
            onClick={() => handleTypeSelection("user")}
         
            className="btn btn-outline-danger rounded-pill py-md-3 px-md-5 mx-2"
          >
           إنضم معنا
          </Button>
          <Button
          style={{ backgroundColor:"#e6cc9f" }}
            // to="Sigin"
            onClick={() => handleTypeSelection("beneficiary")}
            className="btn rounded-pill py-md-3 px-md-5 mx-2"
          >
            هل انت شيف ؟
          </Button>
          </>
              ) : null}
        </div>
        </div>
      </div>
      <div className="carousel-item">
        <img src={hero3} className="d-block w-100" alt="..." style={{ height:"50rem" }}/>
        <div className="carousel-caption d-none d-md-block"style={{fontSize:"2rem" ,background:" rgba(148, 146, 146, 0.5)"}}>
          <h3>     أصدقاء مرضى حساسية القمح</h3>
          <p>
             نحن فريق متطوع من كل التخصصات قمنا بتأسيس اول جمعية في الاردن والوطن العربي لمرضى حساسية القمح مسجلة لدى وزارة التنمية الاجتماعية
            نسعى الى توفير بيئه داعمه و مكاثفه لمرضى حساسيه القمح  (السيلياك)
         
         </p>
         <div className="pt-2 btn-home">
         {
              localStorage.auth == null ? (
                <>
         <Button
         style={{color:"red",border:"2px solid #e6cc9f" }}
           
            onClick={() => handleTypeSelection("user")}
         
            className="btn btn-outline-danger rounded-pill py-md-3 px-md-5 mx-2"
          >
           إنضم معنا
          </Button>
          <Button
          style={{ backgroundColor:"#e6cc9f" }}
            // to="Sigin"
            onClick={() => handleTypeSelection("beneficiary")}
            className="btn rounded-pill py-md-3 px-md-5 mx-2"
          >
            هل انت شيف ؟
          </Button>
          </>
              ) : null}
        </div>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon"  aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Hero End */}
  
{/* Services Start */}
<div className="container-fluid py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
        <h3 className="d-inline-block text-primary text-uppercase border-bottom border-5">
          خدماتنا
        </h3>
        <h1 className="display-6">محتوى طبي شامل </h1>
      </div>
      <div className="row g-5">
        <div className="col-lg-4 col-md-6">
          <div className="service-item rounded d-flex flex-column align-items-center justify-content-center text-center home-service">
            <div className="service-icon mb-4">
            <FaRegCommentDots className="fa fa-2x fa-pills text-white"     style={{ transform: "rotate(22deg)" , fontSize:"50px"}} />
              {/* <i class="fa fa-2x fa-user-md text-white"></i> */}
            </div>
            <h3 className="service-title mb-3"> تواصل معنا </h3>
            <p className="m-0">مختصين للإجابه ع إستفساراتك</p>
            <Link
              className="btn btn-lg rounded-pill Icon"
             to="Contact"
            >
              <i className="bi" >
              <FaArrowRight className=" ourValueIcon" />
              </i>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item  rounded d-flex flex-column align-items-center justify-content-center text-center home-service">
            <div className="service-icon mb-4">
            <FaUtensils className="fa fa-2x fa-pills text-white"     style={{ transform: "rotate(22deg)" , fontSize:"50px"}} />
              {/* <i class="fa fa-2x fa-procedures text-white"></i> */}
            </div>
            <h3 className="service-title mb-3">أفضل الوصفات </h3>
            <p className="m-0">أهم الوصفات الغذائيه لمرضا حساسيه القمح</p>
            <Link
              className="btn btn-lg btn-primary rounded-pill Icon"
              to="Recipes"
            >
               <i className="bi" >
              <FaArrowRight className=" ourValueIcon" />
              </i>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item home-service rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
            <FaStethoscope className="fa fa-2x fa-pills text-white"     style={{ transform: "rotate(22deg)" , fontSize:"50px"}} />
            </div>
            <h3 className="service-title mb-3"> من نحن   </h3>
            <p className="m-0">
            جمعية أصدقاء مرضى حساسية القمح الخيرية
            </p>
            <Link
              className="btn btn-lg btn-primary rounded-pill Icon"
             to="About"
            >
               <i className="bi" >
              <FaArrowRight className=" ourValueIcon" />
              </i>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item home-service rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
            <FaAppleAlt className="fa fa-2x fa-pills text-white"     style={{ transform: "rotate(22deg)" , fontSize:"50px"}} />
              {/* <i class="fa fa-2x fa-ambulance text-white"></i> */}
            </div>
            <h3 className="service-title mb-3">موسوعه أطعمة</h3>
            <p className="m-0">
              في هذا المقال سوف نقوم بجمع قائمة بأطعمة المسموح تنولها
            </p>
            <Link
              className="btn btn-lg btn-primary rounded-pill Icon"
             to="Food"
            >
             <i className="bi" >
              <FaArrowRight className=" ourValueIcon" />
              </i>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item home-service rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
              <FaPills className="fa fa-2x fa-pills text-white"     style={{ transform: "rotate(22deg)" , fontSize:"50px"}} />
            </div>
            <h3 className="service-title mb-3">موسوعه أدويه </h3>
            <p className="m-0">
          
            في هذا المقال سوف نقوم بجمع قائمة الأدوية الخالية من الجلوتين             </p>
            <Link
              className="btn btn-lg btn-primary rounded-pill Icon"
             to="Drug"
            >
            
              <i className="bi" >
              <FaArrowRight className=" ourValueIcon" />
              </i>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="service-item home-service rounded d-flex flex-column align-items-center justify-content-center text-center">
            <div className="service-icon mb-4">
            <FaCalendarAlt className="fa fa-2x fa-pills text-white"     style={{ transform: "rotate(22deg)" , fontSize:"50px"}} />
          
            </div>
            <h3 className=" service-title mb-3"> الورشات و الندوات</h3>
            <p className="m-0">  دورات لبث الوعي والتثقيف المجتمعي حول مرض حساسية القمح             </p>
            <Link
              className="btn btn-lg btn-primary rounded-pill Icon"
             to="Seminar"
            >
               <i className="bi" >
              <FaArrowRight className=" ourValueIcon" />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Services End */}
 {/* Appointment Start */}
<Contact/>
  {/* Appointment End */}
  {/* الورشات و الندوات */}
 <About/>
</div>

  )
  
}
