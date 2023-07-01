import React, { useEffect, useState } from "react";
import axios from "axios";
import './Recipes.css';
import CardRecies from './CardRecies';
import {
  AiOutlineSearch,

 } from "react-icons/ai";

export default function Recipes() {
  const [currentPageUsers, setCurrentPageUsers] = useState(1);
  
  const [NameRecipe, setNameRecipe] = useState([]);


  const [searchTermUsers, setSearchTermUsers] = useState("");
  const [FilterDataUsers, setFilterDataUsers] = useState([]);

  const allrecipes = async () => {
   
    try {
      // Send the data to the server using an HTTP POST request
      const response = await  axios.get("http://localhost:8000/getAllTrueConfirmations");
      console.log(response.data);
      setNameRecipe(response.data);
      setFilterDataUsers(response.data);
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  };

  useEffect(() => {
    allrecipes();
   }, []);

//-----------------------search------------------------//

const filterDataByNameUsers = (searchTermUsers) => {
  const filteredDataUsers =NameRecipe.filter((item) =>
    item.foodName.toLowerCase().includes(searchTermUsers.toLowerCase())
  );
  setFilterDataUsers(filteredDataUsers);
  console.log(filteredDataUsers);
  setCurrentPageUsers(1);
};


  return (



<div className='BODY'>



       {/* Search Start */}
       <div className="container-fluid bg-primary Search py-5" dir="ltr">
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{textAlign:"center"}}>
            <h4 className="d-inline-block text-uppercase border-bottom border-5" style={{textAlign: 'right'}}>تمتع بحياة صحية وسعيدة  </h4>
            <h3 className="display-6 mb-4 " style={{color:"#252525"}}>       ! ذا كنت تبحثين عن وصفات خاليه من الجلوتين لذيذ و شهيه , فلا داعي للبحث بعد الآن! </h3>
       
            <h4 className="text-uppercase d-inline-block" >  مجموعة من الوصفات الصحية والمتخصصة التي تم إعدادها بواسطة خبراء التغذية و خبراء الطهي  </h4>
          </div>
          <div className="mx-auto" style={{width: '100%', maxWidth: '600px'}}>
            <div className="input-group">
              
              <div className="mb-5" >
              <form>
                            <div className="input-group"   style={{ width:"550px",textAlign:"center" }} >
                           
                                <input
                                    type="text"
                                    className="form-control p-3"
                                    style={{ textAlign: "right",fontSize:"20px",color:"#b58867" }}
                                    placeholder=" ...أدخل اسم وصفتك "
                                    value={searchTermUsers}
              onChange={(e) => {
                setSearchTermUsers(e.target.value);
                filterDataByNameUsers(e.target.value);
              }}
                                />
                                     <button className="btn btn-dark border-0 w-25" style={{fontSize:"20px", height: "72px", color:"#e6cc9f",background:"#e6cc9f" }}>     <AiOutlineSearch  className='social-footer' /></button>
                                {/* <button className="btn btn-primary px-3 bttnn" style={{ height: "72px" }}>
                                    <i className="fa fa-search" />
                                </button> */}
                                
                            </div>
                            </form>
                        </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search End */}

   <CardRecies FilterDataUsers={FilterDataUsers} setCurrentPageUsers={setCurrentPageUsers} />
    </div>
  );
}

