import React, { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";

import axios from 'axios';
import './Login.css';
// import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';




const Login = () => {
  const [user0, setUser0] = useState([]);
  // const [errorG, setErrorG] = useState("");
  // const login = useGoogleLogin({
  //     onSuccess: (codeResponse) => setUser0(codeResponse),
  //     onError: (error) => console.log("Login Failed:", error),
  //   });
    useEffect(() => {
      if (user0.length !== 0) {
          console.log(user0)
          let token =user0.access_token

        axios
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user0.access_token}`
            ,
            {
              headers: {
                  Authorization: `Bearer ${user0.access_token}`,
                Accept: "application/json",
              },
            }
          )
          .then((res) => {
            // setProfile(res.data);
            // setErrorG("");
            const user0Data = {
              firstName:res.data.name,
              email: res.data.email,
              password:"123456",
              role: 0 ,
            }

            axios
            .post("http://localhost:5000/api/users",user0Data)
            .then((response) => {
              console.log(user0Data);
            })
            .catch((err) => console.log(err.message));
          //   localStorage.setItem("auth",token)
          //   window.location.href = 'http://localhost:3000/';
  
        })
              .catch((err) => console.log(err.message));
          }
        }, [user0]);

        const [email, setemail] = useState("");
        const [emailp, setemailp] = useState("");
        const [password, setpassword] = useState("");
        const [passwordp, setpasswordp] = useState("");
     

    /* google login  -start */
    // const [ user, setUser ] = useState([]);
    // const [ profile, setProfile ] = useState([]);
    
    // const { routs,updateRouts } = useContext(UserContext)
    // const { SignStatus,updateSignStatus } = useContext(UserContext)
    // const { curruntUser,updateSetCurruntUser } = useContext(UserContext)


   
    const handleSubmit = async (event) => {

      event.preventDefault();



      const userData = {
       email: email,
       password:password
     };

     try {
       // Send the data to the server using an HTTP POST request
       const response = await axios.post(
         "http://localhost:5000/api/usersLogin",
         userData
       );
       console.log("Data inserted:", response.data);


       if(response.data.error != 'incorrect password'){
       //   setStatus("success");
        console.log("success")
        console.log(response.data.token);

        let x =[]
             if (response.data.user0.role==0){
              console.log('this is 0');
             x= [false ,true,true ]
           }else if(response.data.user0.role==1){
            console.log('this is 1');
              // x= [true ,false,true ]
               // Redirect the user to the admin project
    window.location.href = "http://localhost:3000";
           }else if(response.data.user0.role==2){
            console.log('this is 2');
              x= [true ,true,false]
           }

     
          localStorage.setItem("auth",(response.data.token))

     
          localStorage.setItem("SignStatus","SignOut")
          localStorage.setItem("roles",JSON.stringify(x))
          window.location.href = 'http://localhost:3001/';
       }else{
       //   setStatus("failed");
         console.log("failed")
       }
       
     } catch (error) {
       console.error("Error inserting data:", error);
       // setStatus("error");
       console.log("error")
     }











   }

  return (
    <div className="body-Login">
      <section className="container" dir="rtl" lang="ar">
    <div className="row">
      <div className="col-sm-12">
        <div className="content" style={{ height:"600px" }}>
          <div className="text">الدخول إلى حسابك</div>
          {/* <div className="flex flex-col items-center ">
                    <button id="google-sign-in" 
                            className="w-full bg-[#219D80] max-w-xs font-bold hover:bg-[#219D80] hover:text-white  shadow-sm rounded-lg py-3 text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                            onClick={() => login()} 
                            >

                            <div className="bg-white p-2 rounded-full">
                                <svg className="w-4" viewBox="0 0 533.5 544.3">
                                    <path
                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                        fill="#4285f4" />
                                    <path
                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                        fill="#34a853" />
                                    <path
                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                        fill="#fbbc04" />
                                    <path
                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                        fill="#ea4335" />
                                </svg>
                            </div>
                            <span className="ml-4">


                                Sign-In with Google
                            </span>
                        </button>

                        
                    </div> */}
          <form action="#" onSubmit={handleSubmit}>
            <div className="field">
              <input required="" id="email1"
               type="text" className="input"
               value={email}
               onChange={(e) => setemail(e.target.value)}  />
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
                  <g>
                    <path
                      className=""
                      data-original="#000000"
                      fill="#595959"
                      d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"
                    />
                  </g>
                </svg>
              </span>
             
              <label className="label" style={{ color: "red" }}>بريدك الالكتروني او رقمك</label>
              <p className="text-red" style={{ color: "red", fontSize:"20px" }}>{emailp}</p>
            </div>
            <div className="field">
              <input
                required=""
                id="password1"
                type="password"
                className="input"
                value={password}
               onChange={(e) => setpassword(e.target.value)}
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
                  <g>
                    <path
                      className=""
                      data-original="#000000"
                      fill="#595959"
                      d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0"
                    />
                  </g>
                </svg>
              </span>
              <label className="label">كلمه السر</label>
              <p className="text-red" style={{ color: "red", fontSize:"20px" }}>{passwordp}</p>
            </div>
            <div className="forgot-pass">
              <a href="#">هل نسيت كلمه السر ؟</a>
            </div>
            <button className="button" id="loginButton">
              تسجيل
            </button>
            <div className="sign-up">
              هل تريد إنشاء حساب جديد ؟ <Link to="/Sigin/user">  تسجيل دخول</Link> 
            </div>

            
          </form>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Login;