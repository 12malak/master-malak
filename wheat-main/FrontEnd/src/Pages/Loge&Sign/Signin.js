import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import jwt from 'jwt-decode' // import dependency
import axios from 'axios';
import {useParams, useNavigate } from "react-router-dom";
import './Login.css';



const Signin = () => {

  
  const { type} = useParams();

    const [name, setName] = useState("");
    const [namep, setNamep] = useState("");

    const [email, setemail] = useState("");
    const [emailp, setemailp] = useState("");

    const [phone, setphone] = useState("");
    const [phonep, setphonep] = useState("");

    const [password, setpassword] = useState("");
    const [passwordp, setpasswordp] = useState("");


    const handleSubmit = async (event) => {
      event.preventDefault();
  
      validateName(name)
      validatePassword(password)
      validateEmail(email)
      validatePhone(phone)
  
      if( validateName(name) && validatePassword(password) && validateEmail(email)&& validatePhone(phone) ){


        const userData = {
          firstName: name,
          email: email,
          password:password,
          role: type === 'user' ? 0 : 2
        };

        try {
          // Send the data to the server using an HTTP POST request
          const response = await axios.post(
            "http://localhost:5000/api/users",
            userData
          );
          let x =[]
          if (response.data.addUser.role==0){
          x= [false ,true,true ]
        }else if(response.data.addUser.role==1){
          //  x= [true ,false,true ]
            // Redirect the user to the admin project
    window.location.href = "http://localhost:3000";
        }else if(response.data.addUser.role==2){
           x= [true ,true,false]
        }
        localStorage.setItem("auth",(response.data.token))
          window.location.href = "http://localhost:3001/";
        } catch (error) {
          console.error("Error inserting data:", error);
        }
      
      
      
      
                  }
                  
                  
                  
                }


                function validateName(name){
                  if(name=== ""){
                    setNamep(" الرجاء أدخل اسمك ! ");
                    return false;
                  }else{
                      setNamep("");
                    return true;
                  }
                }
              
                  function validateEmail(userEmail){
                      if (!/\S+@\S+\.\S+/.test(userEmail)){
                          setemailp("البريد الالكتروني غير صحيح يجب ان يكون كهذه الصيغه  example@gmail.com");
                return false;
                 }else{
                setemail("")
                return true;
                 }
              
                  }
                  function validatePhone(userphone){
                      if (!/^07[0-9]{8}$/.test(userphone))
                      {
                         setphonep("رقم الموبايل يجب ان يتكون من 10 ارقام تبدأ ب 07 ");
                         return false;
                     }
                     setphonep("")
                    return true;
                    }
                
              
              
                function validatePassword(userPassword){
                  let password = userPassword;
                      const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;
                      if (!passwordRegex.test(password)) {
                          setpasswordp("يرجى ادخال كلمة المرور التي تتكون من 8 أحرف على الأقل وتحتوي على حرف كبير واحد ، ورقم واحد ، ورمز خاص واحد ")
                          return false;
                        }else{
                          setpasswordp("")
                          return true;
                         }
                  }
          


  return (

 
 <div className="body-Login mb-1">
      <section className="container" dir="rtl" lang="ar">
  <div className="row">
    <div className="col-sm-12">
      <div className="content"style={{ height:"755px" }}>
        <div className="text">الدخول إلى حسابك</div>

        <form action="#" id="form1"  onSubmit={handleSubmit}>
          <div className="field">
            <input required="" type="text " className="input" id="firstName" placeholder="أدخل إسمك"
            value={name}
            onChange={(e) => setName(e.target.value)} />
            <span className="span">
              <svg
                className=""
                xmlSpace="preserve"
                style={{ enableBackground: "new 0 0 512 512" }}
                viewBox="0 0 512 512"
                y={0}
                x={0}
                height={20}
                width={50}
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g />
              </svg>
            </span>
            <label className="label" >  أدخل إسمك</label>
          </div>
            <p className="text-red"  style={{ color: "red", fontSize:"20px" }}>{namep}</p>
        
          <br />
          <div className="field">
            <input required="" type="text" className="input" id="email" placeholder=" بريدك الالكتروني "
            value={email}
              onChange={(e) => setemail(e.target.value)} 
            />
            <span className="span">
              <svg
                className=""
                xmlSpace="preserve"
                style={{ enableBackground: "new 0 0 512 512" }}
                viewBox="0 0 512 512"
                y={0}
                x={0}
                height={20}
                width={50}
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g />
              </svg>
            </span>
            <label className="label">  بريدك الالكتروني</label>
          </div>
            <p className="text-red"  style={{ color: "red", fontSize:"20px" }}>{emailp}</p>
        
          <br />
          <div className="field">
            <input
              required=""
              type="password"
              className="input"
              id="password"
              placeholder="أدخل كلمه سرك "
              value={password}
               onChange={(e) => setpassword(e.target.value)}/>
                          
            <span className="span">
              <svg
                className=""
                xmlSpace="preserve"
                style={{ enableBackground: "new 0 0 512 512" }}
                viewBox="0 0 512 512"
                y={0}
                x={0}
                height={20}
                width={50}
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g />
              </svg>
            </span>

            <label className="label">كلمه السر</label>
           
          </div>
          <p className="text-red" style={{ color: "red", fontSize:"20px" }}>{passwordp}</p>
          <br />
          <div className="field">
            <input
              required=""
              type="tel"
              className="input"
              id="confirmpass"
              placeholder="أدخل رقم تلفونك"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
            />
            <span className="span">
              <svg
                className=""
                xmlSpace="preserve"
                style={{ enableBackground: "new 0 0 512 512" }}
                viewBox="0 0 512 512"
                y={0}
                x={0}
                height={20}
                width={50}
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g />
              </svg>
            </span>
            <label className="label">  أدخل رقم تلفونك </label>
          </div>
            <p className="text-red"  style={{ color: "red", fontSize:"20px" }}>{phonep}</p>
       
          <div className="forgot-pass">
            <a href="#">هل نسيت كلمه السر ؟</a>
          </div>
        
          <button className="button" id="loginButton">
            تسجيل
          </button>
          <div className="sign-up">
          هل لديك حساب؟  <Link to="Login">  <Link to="/Login"> تسجيل دخول</Link> </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
 </div>
  
  );
}

export default Signin;    