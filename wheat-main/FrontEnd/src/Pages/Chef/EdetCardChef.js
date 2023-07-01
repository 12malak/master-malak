
import React from "react";

import CardChef from './CardChef';



const EdetCardChef = () => {

  




  return (
    <>


<div className="container py-5"  dir="rtl" lang="ar">
        <div className="row g-5">
          <div className="col-lg-12">
            {/* Comment Form Start */}
            <div className="bg-light rounded p-5">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-white mb-4"> معلومات  الوصفه  </h4>
              <br />
              <form>
                <div className="row g-3" style={{textAlign: 'right'}}>

                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="أدخل إسمك"
                    style={{ height: 55, color: "#684024" }}
                    // value={name}
                    // onChange={(event) => setName(event.target.value)}
                    // required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder=" أدخل رقم موبايلك"
                    style={{ height: 55, color: "#684024" }}
                    // value={phone}
                    // onChange={(event) => setPhone(event.target.value)}
                    // required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="إدخل الصوره على شكل رابط" 
                    style={{ height: 55 }}
                    // value={foodUrl}
                    // onChange={(event) => setFoodUrl(event.target.value)}
                    // required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder=" أدخل أسم الوصفه"
                    style={{ height: 55,color:"#684024" }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder=" أدخل الكميه  "
                    style={{ height: 55,color:"#684024" }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="أدخل السعر   "
                    style={{ height: 55,color:"#684024" }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-light border-0"
                    style={{ color:"#684024" }}
                    rows={5}
                    placeholder="أدخل  وصف عن الوصفه "
                    defaultValue={""}
                  />
                </div>
               
               
              
                
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit"  style={{ color:"#684024" }}>تعديل  معلومات  الوصفه    </button>
                  </div>
                </div>
              </form>
            </div>
            
          </div>
        
        </div>
        <CardChef/>
      </div> 



    </>
  )
}

export default EdetCardChef;
