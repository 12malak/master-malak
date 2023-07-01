
import './Contact.css';
import React, { useState,useEffect } from "react";
import axios from "axios";
// import Swal from "sweetalert2"; 

import { FaLocationArrow } from "react-icons/fa";
import {FaPhone}  from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";




const Contact = () => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [message0, setMessage0] = useState([]);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    var allConts = {
      patientName: name,
      patientGmail: email,
      phoneNumber: phone,
      patientMsg: message,
    };
  
    try {
      const response = await axios.post(
        "http://localhost:8000/adminContact",
        allConts
      );
      console.log(response);
     alert("Message sent successfully!");
    } catch (error) {
      console.log(error);
    alert( "An error occurred. Please try again later.");
    }
  };


    // let message = userMessages || [];
    // message.push(message0);  
 // console.log(name)
// console.log(email)
// console.log(message)
// console.log(phone)
//     try {
//       const contactMessage = {
//         message,
//       };

//       await axios.put(`http://localhost:5000/api/usersContactUs/${userId}`, contactMessage);
//     } catch (error) {
//       console.error("Error updating user:", error);
//     }
//     // Swal.fire("Success", "Message sent successfully!", "success");

//   };


  return (
    <div>
    {/* Contact Start */}
    <div className="container-fluid pt-5" dir="rtl" lang="ar">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
          <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5">
            هل لديك أسئلة ؟
          </h4>
          <h1 className="display-4">لا تتردد في الاتصال بنا</h1>
        </div>
        <div className="row g-5 mb-5" dir="rtl">
          <div className="col-lg-4">
            <div
              className=" rounded d-flex flex-column align-items-center justify-content-center text-center"
              style={{ height:" 200px"  ,background:"#f9f2e7"}}
            >
              <div
                className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                style={{ width: 100, height: 70, transform: "rotate(-15deg)" }}
              >
                <FaLocationArrow
                 className="fa fa-2x fa-phone text-white"
                  style={{ transform: "rotate(22deg)" , fontSize:"32px"}}
             />
             
               
              </div>
              <h6 className="mb-0"> حي نزال..مجمع ضراغمه, Amman, Jordan</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className=" rounded d-flex flex-column align-items-center justify-content-center text-center"
              style={{ height: 200 ,background:"#f9f2e7" }}
            >
              <div
                className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                style={{ width: 100, height: 70, transform: "rotate(-15deg)" }}
              >
                <FaPhone
                  className="fa fa-2x fa-phone text-white"
                  style={{ transform: "rotate(22deg)" , fontSize:"32px"}}
                />
              </div>
              <h6 className="mb-0">07 7510 9040</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className=" rounded d-flex flex-column align-items-center justify-content-center text-center"
              style={{ height: 200,background:"#f9f2e7" }}
            >
              <div
                className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                style={{ width: 100, height: 70, transform: "rotate(-15deg)" }}
              >
                <FaEnvelope
                  className="fa fa-2x fa-envelope-open text-white"
                  style={{ transform: "rotate(22deg)" , fontSize:"32px"}}
                />
              </div>
              <h6 className="mb-0">info@example.com</h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={{ height: 500 }}>
          <div className="position-relative h-100">
  <iframe
    className="position-relative w-100 h-100"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13541.433029950103!2d35.9198906445801!3d31.95117620000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fee106ceb11%3A0x5a3e9fc13f0474dc!2z2YHZhtiv2YIg2KPZiNmE2YrZgQ!5e0!3m2!1sar!2sjo!4v1688234045947!5m2!1sar!2sjo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
    frameBorder="0"
    style={{ border: 0 }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
  />
</div>
          </div>
        </div>
        <div
          className="row justify-content-center position-relative"
          style={{ marginTop: "-200px", zIndex: 1 }}
        >
          <div className="col-lg-8">
            <div className="bg-white rounded p-5 m-5 mb-0">
              <form  onSubmit={handleSubmit}>
              
                <div className="row g-3">
              
                  <div className="col-12 col-sm-6">
                    <input
                      type="text"
                      className="form-control  border-0 mt-1"
                      placeholder="أدخل إسمك"
                      style={{ height: 55 }}
                      value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                      />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input
                      type="email"
                      className="form-control  border-0 mt-1"
                      placeholder="إدخل بريدك الالكتروني"
                      style={{ height: 55 }}
                      value={email}
                        onChange={(event) => setEmail(event.target.value)} required
                      />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control  border-0 mt-1"
                      placeholder="أدخل رقم موبايلك "
                      style={{ height: 55 }}
                      value={phone}
                        onChange={(event) => setPhone(event.target.value)} required
                      />
                  </div>
              
            
                  <div className="col-12">
                    <textarea
                      className="form-control  border-0 mt-1"
                      rows={5}
                      placeholder="أدخل  رسالتك النصيه"
                      style={{ color:"#684024" }}
                      // value={message0}
                      value={message}
                        onChange={(event) => setMessage(event.target.value)} required
                      />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3 mt-1" type="submit"  style={{ color:"#684024" }}>
                      إرسال إستفسارك
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Contact End */}
  </div>
  );
}

export default Contact;