

import React, { useState,useEffect } from "react";
import axios from "axios";
function Payment() {


  const [UserName, setUserName] = useState("");
  const [Governorate, setGovernorate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [nameOfCard, setNameOfCard] = useState("null");
  const [cardNumber, setCardNumber] = useState("5000000000000000");

  const [address, setAddress] = useState("");
  const [Date, setDate] = useState("00");
  const [Vcc, setVcc] = useState("000");


  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    var allPayment = {
      UserName: UserName,
      Governorate: Governorate,
      phoneNumber: phoneNumber,
      address: address,

      paymentMethod: paymentMethod,
      nameOfCard: nameOfCard,
      cardNumber: cardNumber,
      Date: Date,
      Vcc:Vcc,
    };
    console.log(allPayment);
    try {
      const response = await axios.post(
        "http://localhost:8000/adminPayment",
        allPayment
      );
      console.log(response);
     alert("تمت عمليه الدفع بنجاح !!");
    } catch (error) {
      console.log(error);
    alert( "حدث خطأ. الرجاء معاودة المحاولة في وقت لاحق");
    }
  };

  
  const handlePayment = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
  
    // const cardNumber = document.getElementById("card-no").value;
    const cardRegex = /^(4\d{15}|5\d{15})$/;

    if (!cardNumber || !Vcc || !Date || !nameOfCard) {
      alert("الرجاء إدخال كافة تفاصيل البطاقة ");
      return;
    }
    if (!cardRegex.test(cardNumber)) {
      alert("رقم البطاقة غير صالحة");
      return;
    }

    const cvcRegex = /^\d{3}$/;

    if (!cvcRegex.test(Vcc)) {
      alert("Vcc غير صالح");
      return;
    }
   
  handleSubmit(event); // Passes the event parameter to the handleSubmit function
  };


  return (
    <div  className="container py-5" dir="rtl" lang="ar">
     <div className="row g-5" >
          <div className="col-lg-12">
            {/* Comment Form Start */}
            <div className="bg-light rounded p-5">
              <h4 className="d-inline-block  text-uppercase border-bottom border-5 border-white mb-4">عنوان الفاتوره  :</h4>
              <br />
              <form >
                <div className="row g-3" style={{textAlign: 'right'}}>
                  <div className="col-12 col-sm-6 p-2">
                    <input type="text" className="form-control bg-light border-0" 
                     style={{height: '55px'}} 
                     placeholder="أدخل اسمك"
                     value={UserName}
                            onChange={(event) => setUserName(event.target.value)}
                            required
                    />
                  </div>
                 
               
                  <div className="col-12 col-sm-6 p-2">
                 
                    <input type="phone" className="form-control bg-light border-0"
                      placeholder="أدخل رقم موبايلك  "  style={{height: '55px'}}
                     
                      value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                            required
                     />
                  </div>
                  <div className="col-12 col-sm-6 ">
                    <input type="text" className="form-control bg-light border-0" 
                    style={{height: '55px'}}
                    placeholder="أدخل اسم محافظتك"
                    value={Governorate}
                            onChange={(event) => setGovernorate(event.target.value)}
                            required
                       />
                  </div>
                  <div className="col-12 col-sm-6 p-2">
                    <select className="form-select bg-light border-0" style={{height: '55px'}}
                     id="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            required
                    
                    >
                     
                      <option value="cash">نقد</option>
                      <option value="CreditCard"> بطاقه ائتمان</option>
                    </select>
                  </div>

                  <div className="col-12 col-sm-6 p-2">
                    <input type="text" className="form-control bg-light border-0" 
                    style={{height: '55px'}}
                    placeholder="أدخل  عنوانك "
                    value={address}
                            onChange={(event) => setAddress(event.target.value)}
                            required
                       />
                  </div>
                  {paymentMethod === "CreditCard" ? (

<>


  
<h4 className="d-inline-block  text-uppercase border-bottom border-5 border-white p-5">نموذج إتمام الشراء: </h4>
              <br />
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" 
                    style={{height: '55px'}}
                    placeholder=" اسم حامل البطاقة"
                    value={nameOfCard}
                            onChange={(event) => setNameOfCard(event.target.value)}
                            required
                       />
                        <label className="d-inline-block text-primary  mb-4" htmlFor="formControlLgXsd">
               
               الاسم الكامل كما هو معروض على البطاقة
             </label>
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" 
                    style={{height: '55px'}}
                    placeholder="1234 5678 1234 5678"
                    value={cardNumber}
                    id="card-no"
                            onChange={(event) => setCardNumber(event.target.value)}
                            required
                       />
                       <label className="d-inline-block text-primary  mb-4" htmlFor="formControlLgXM">
                  رقم البطاقة
                </label>
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="date" className="form-control bg-light border-0" 
                    style={{height: '55px'}}
                    placeholder="MM/YYYY"
                    value={Date}
                            onChange={(event) => setDate(event.target.value)}
                            required
                       />
                        <label className="d-inline-block text-primary mb-4" htmlFor="formControlLgExpk">
                    تاريخ إنتهاء الصلاحية
                  </label>
                  </div>
                 
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" 
                    style={{height: '55px'}}
                    placeholder="Cvv"
                    value={Vcc}
                            onChange={(event) => setVcc(event.target.value)}
                            required
                       />
                       <label className="d-inline-block text-primary mb-4" htmlFor="formControlLgcvv">
                    الرقم السري
                  </label>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit"   onClick={handlePayment}>إتمام عمليه الشراء         </button>
                  </div>

</>

                    ) : ( 
                                      
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit"   onClick={handlePayment}> حفظ معلومات الفاتوره           </button>
                  </div>
                    )}
      
                
                  





                </div>
              </form>
            </div>
            
          </div>
          {/* Sidebar Start */}
        
          {/* Sidebar End */}
        </div>
     
    </div>
  )
}

export default Payment
