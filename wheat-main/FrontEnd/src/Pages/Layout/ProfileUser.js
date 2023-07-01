import React from 'react';

  import axios from 'axios';
  import { useState, useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
  
const ProfileUser = () => {
  const navigate=useNavigate();
 

  const [newName, setNewName] = useState();
  const [newPhone, setNewphone] = useState();
  const [newEmail, setNewEmail] = useState();
  const newData = { firstName: newName, email: newEmail , phone : newPhone}

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }
  const handlePhoneChange = (e) => {
    setNewphone(e.target.value);
  }

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  }

  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState();
  const [user, setUser] = useState([]);


  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("auth");
      if (token) {
        const response = await axios.get("http://localhost:5000/protected", {
          headers: {
            Authorization: token,
          },
        });
        setUserId(response.data.user.id);
        setUserName(response.data.user.username);
        console.log(response.data.user.id); // Log the updated userId
        console.log(response.data.user.username); // Log the updated userName
        axios
        .get(`http://localhost:5000/api/users/${response.data.user.id}`)
        .then((response) => {
          setUser(response.data)
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
     
    }

  } catch (error) {
    console.error(error);
    localStorage.removeItem("auth");
    window.location.href = "http://localhost:3000/Login";
  } finally {
    console.log(false);
  }
};

useEffect(() => {
  if (localStorage.auth != null) {
    fetchProtectedData();
  }
}, []);


useEffect(() => {

}, []);

console.log(userId); // This may log the initial value or undefined
console.log(userName)
// console.log(phone)
console.log(user)




const handleSubmit = () => {
  axios.put(`http://localhost:5000/api/users/${userId}`, newData)
  .then((response) => {
    console.log(response.data)

  })
  .catch((err) => {
    console.error('Error Update user data:', err);
  })
  // setphone("");
  // window.location.href="http://localhost:3000/ProfilePage";
  navigate("/ProfileUser")
  
};



  return (
    <>
         
     <div className="container py-5"  dir="rtl" lang="ar">
        <div className="row g-5">
          <div className="col-lg-12">
            {/* Comment Form Start */}
            <div className="bg-light rounded p-5">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-white mb-4"> معلوماتك الشخصيه  </h4>
              <br />
              <form onSubmit={handleSubmit}>
                <div className="row g-3" style={{textAlign: 'right'}}>
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" 
                     style={{height: '55px'}} 
                    placeholder={user[0]?.firstName}
                          onChange={handleNameChange}
                    />
                  </div>
                 
                  {/* <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" placeholder="أدخل  أمراض مزمنه اذا وجد" style={{height: '55px'}} />
                  </div> */}
                   {/* <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" placeholder="أدخل اسم محافظتك" style={{height: '55px'}} />
                  </div> */}
                  {/* <div className="col-12 col-sm-6">
                    <select className="form-select bg-light border-0" style={{height: '55px'}}>
                      <option selected>الجنس</option>
                      <option value={1}>أنثى</option>
                      <option value={2}> ذكر</option>
                    </select>
                  </div> */}
                  <div className="col-12 col-sm-6">
                 
                    <input type="phone" className="form-control bg-light border-0"
                      placeholder={user[0]?.phone}  style={{height: '55px'}}
                     onChange={handlePhoneChange} 
                    
                     />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="email" className="form-control bg-light border-0" 
                    style={{height: '55px'}}
                    placeholder={user[0]?.email}
                          onChange={handleEmailChange}
                       />
                  </div>
                  {/* <div className="col-12 col-sm-6">
                    <div className="date" id="date" data-target-input="nearest">
                      <input type="text" className="form-control bg-light border-0 datetimepicker-input" placeholder="التاريخ" data-target="#date" data-toggle="datetimepicker" style={{height: '55px'}} />
                    </div>
                  </div> */}
                  {/* <div className="col-12 col-sm-6">
                    <select className="form-select bg-light border-0" style={{height: '55px'}}>
                      <option selected>حالتك الاجتماعيه</option>
                      <option value={1}>أعزب</option>
                      <option value={2}> متزوج</option>
                      <option value={1}>مطلق</option>
                      <option value={2}> ارمل</option>
                    </select>
                  </div> */}
                  {/* <div className="col-12 col-sm-6">
                    <input type="text" className="form-control bg-light border-0" placeholder="أدخل اسم دولتك " style={{height: '55px'}} />
                  </div> */}
                  {/* <div className="col-12 col-sm-6">
                    <select className="form-select bg-light border-0" style={{height: '55px'}}>
                      <option selected>حالتك المرضية</option>
                      <option value={1}>الثلاسيميا</option>
                      <option value={2}> فقر الدم اللاتنسجي</option>
                      <option value={1}>فقر الدم المنجلي</option>
                      <option value={2}>فقر الدم الناجم عن نقص الفيتامينات </option>
                      <option value={2}>فقر الدم الناجم عن نقص الحديد </option>
                    </select>
                  </div> */}
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">تعديل  معلومات  ملفك  الشخصي  </button>
                  </div>
                </div>
              </form>
            </div>
            
          </div>
          {/* Sidebar Start */}
        
          {/* Sidebar End */}
        </div>
      
      </div> 
    </>
  )
}


export default ProfileUser;
