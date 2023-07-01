import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import {
 
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

// AiOutlineFilter
// AiOutlineSearch
// AiTwotoneFunnelPlot
const Footer = () => {
  return (
    <div className='FOOTER'  dir="rtl" lang="ar">
    {/* Footer Start */}
    <div className="container-fluid bg-dark text-light">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h4 className="text-primary text-uppercase mt-4 mb-3">
              تواصل معنا
            </h4>
            <p className="mb-4">
            نحن نسعى جاهدين لتقديم خدمة شاملة ومفيدة لمرضى حساسية القمح، وندعوكم للانضمام إلينا والاستفادة من خدماتنا ومشاركة وصفاتكم الصحية واللذيذة مع المجتمع.


            </p>
            
          </div>
         
          <div className="col-lg-4 col-md-6">
            <h4 className="text-primary text-uppercase mt-4 mb-3">
              روابطنا
            </h4>
            <div className="d-flex flex-column justify-content-start">
            
              <a className="text-light mb-2" href="about.html">
                <i className="fa fa-angle-right me-2" />
                من نحن
              </a>
              <a className="text-light mb-2" href="service.html">
                <i className="fa fa-angle-right me-2" />
                خدماتنا
              </a>
              <a className="text-light mb-2" href="الوصفات.html">
                <i className="fa fa-angle-right me-2" />
                الوصفات الغذائيه
              </a>
              <a className="text-light mb-2" href="أدويه.html">
                <i className="fa fa-angle-right me-2" />
                أدوية
              </a>
              <a className="text-light" href="contact.html">
                <i className="fa fa-angle-right me-2" />
                تواصلو معنا
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6  Newsletter">
            {/* <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
              Newsletter
            </h4> */}
            {/* <form action="">
              <div className="input-group" dir="ltr">
                <input
                  type="text"
                  style={{ textAlign: "right" }}
                  className="form-control p-3 border-0"
                  placeholder="ادخل بريدك الالكتروني"
                />
                <button className="btn btn-primary">اشتراك</button>
              </div>
            </form> */}
            <h3 className="text-primary text-uppercase mt-4 mb-3">تابعنا</h3>
            <div className="d-flex ">
           
                  <Link to="https://www.instagram.com/fcdcharity/"  target="_blank" className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2">
                    <AiOutlineInstagram className='social-footer' />
                  </Link>
                  <Link to="https://www.facebook.com/fcdcharity/?locale=ar_AR"  target="_blank" className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2">
                    <AiOutlineFacebook className='social-footer' />
                  </Link>
                  <Link className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"  to="https://www.facebook.com/fcdcharity/?locale=ar_AR"  target="_blank">
              <AiOutlineWhatsApp  className='social-footer' />
              </Link>
                </div>
                <div className="p-5">
                <p className="mb-2">
              <i className="fa fa-envelope text-primary me-3" />
            الاردن , عمان , حي نزال   
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary me-3" />
              info@example.com
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt text-primary me-3" />
              07 7510 9040
            </p>
            </div>
            {/* <div className="d-flex">
              <a
                className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                href="#"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-lg btn-primary btn-lg-square rounded-circle"
                href="#"
              >
                <i className="fab fa-instagram" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    {/* <div className="container-fluid bg-dark text-light border-top border-secondary py-2">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-md-0">
              ©{" "}
              <a className="text-primary" href="#">
                Your Site Name
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              Designed by{" "}
              <a className="text-primary" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </p>
          </div>
        </div>
      </div>
    </div> */}
    {/* Footer End */}
  </div>
  
  );
}

export default Footer;