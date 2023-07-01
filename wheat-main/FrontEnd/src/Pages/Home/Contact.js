import React, { useState,useEffect } from "react";
import axios from "axios";
function Contact() {


    
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

  return (
    <>
     <div className="container-fluid my-5 Doctor"  dir="rtl" lang="ar">
    <div className="container py-5">
      <div className="row gx-5 p-0">
        <div className="col-lg-6 mb-5 mb-lg-0 p-0 btn-home">
          <div className="mb-4">
            <h3 className="d-inline-block text-uppercase border-bottom border-5 " style={{color:"#e6cc9f" }}>
            تواصل معنا 
            </h3>
            <h1 className="display-6 pt-4"   style={{color:"#e6cc9f" }} >هل لديك أسئلة ؟</h1>
          </div>
          <p className="text-white mb-5 pragr1agh">
          يمكنك الاتصال بنا عن طريق البريد الإلكتروني أو الهاتف أو نموذج الاتصال المتوفر على موقعنا. وسنكون سعداء بالإجابة على أسئلتك وتقديم المساعدة التي تحتاجها. كما نتعهد بالرد على جميع الاستفسارات في أسرع وقت ممكن وبمهنية عالية.


          </p>
          {/* <a
            className="btn btn-outline-dark rounded-pill py-3 px-5"
            href="بطاقه الدفع .html"
          >
            أبدء الان
          </a> */}
          {/* <a
            className="btn rounded-pill py-3 px-5 me-3"
            style={{ backgroundColor:"#e6cc9f" }}
          
          >
            أبحث عن طبيبك
          </a> */}
        </div>
        <div className="col-lg-6">
          <div className="bg-white text-center rounded p-5">
      
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
            {/* Comment Form End */}
          </div>
        </div>
      </div>
    </div>
  </div>  
    </>
  )
}

export default Contact
