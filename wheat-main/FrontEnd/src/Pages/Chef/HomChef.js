import React, { useState, useEffect } from "react";
import axios from "axios";

import "./HomeChef.css";
const HomChef = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [quantity, setQuantity] = useState();

  const [price, setPrice] = useState();
  const [foodName, setFoodName] = useState();
  const [foodDesc, setFoodDesc] = useState();

  const [foodUrl, setFoodUrl] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    var allConts = {
      name: name,
      phone: phone,
      quantity: quantity,
      price: price,
      foodName: foodName,
      foodDesc: foodDesc,
      foodUrl: foodUrl,
    };
console.log(allConts);
    try {
      const response = await axios.post(
        "http://localhost:8000/adminConfirmation",
        allConts
      );
      console.log(response);
     alert("Message sent successfully!");
     window.location.reload();
    } catch (error) {
      console.log(error);
    alert( "An error occurred. Please try again later.");
    }
  };

  return (
    <div className="HomChef">
      {/* Search Start */}
      <div className="container-fluid bg-primary Search2 py-5" dir="ltr">
        <div className="container py-5">
          <div
            className="text-center mx-auto mb-5"
            style={{ textAlign: "center" }}
          >
            {/* <h4 className="d-inline-block text-uppercase border-bottom border-5" style={{textAlign: 'right',color:"#b58867"}}>مرحبًا       </h4> */}
            <h3 className="display-6 mb-4 " style={{ color: "#8a6041" }}>
              {" "}
              مرحبًا يمكنك الآن تقديم وصفاتك بسهولة على موقعنا ومساعدة مرضى
              حساسية القمح في إيجاد وصفات صحية ولذيذة لتلبية احتياجاتهم الغذائية
              الخاصة
            </h3>

            <h4
              className="text-uppercase d-inline-block"
              style={{ color: "#684024" }}
            >
              {" "}
              يمكنك إضافة وصفتك عن طريق ملء النموذج المتاح على موقعنا و سنقوم
              بنشرها بمجرد مراجعتها{" "}
            </h4>
            <br />
            <h4
              className="text-uppercase d-inline-block"
              style={{ color: "#684024" }}
            >
              {" "}
              والتأكد من تطابقها مع معاييرنا{" "}
            </h4>
          </div>
          <div className="mx-auto" style={{ width: "100%", maxWidth: "600px" }}>
            <div className="input-group"></div>
          </div>
        </div>
      </div>
      {/* Search End */}
      <div
        className="row justify-content-center position-relative"
        style={{ marginTop: "-200px", zIndex: 1 }}
      >
        <div className="col-lg-8" dir="rtl" lang="ar">
          <div className="bg-white rounded p-5 m-5 mb-0">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="أدخل إسمك"
                    style={{ height: 55, color: "#684024" }}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="إدخل الصوره على شكل رابط" 
                    style={{ height: 55 }}
                    value={foodUrl}
                    onChange={(event) => setFoodUrl(event.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder=" أدخل رقم موبايلك"
                    style={{ height: 55, color: "#684024" }}
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder=" أدخل أسم الوصفه"
                    style={{ height: 55, color: "#684024" }}
                    value={foodName}
                    onChange={(event) => setFoodName(event.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder=" أدخل الكميه  "
                    style={{ height: 55, color: "#684024" }}
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                    required
                  />
                </div>

                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-light border-0"
                    placeholder="أدخل السعر   "
                    style={{ height: 55, color: "#684024" }}
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    style={{ color: "#684024" }}
                    className="form-control bg-light border-0"
                    rows={5}
                    placeholder="أدخل  وصف عن الوصفه "
                    defaultValue={""}
                    value={foodDesc}
                    onChange={(event) => setFoodDesc(event.target.value)}
                    required
                  />
                </div>

                <div className="col-12">
                  <button
                    className="btn w-100 py-3"
                    type="submit"
                    style={{ background: " #e6cc9f", color: "#684024" }}
                  >
                    نشر وصفتك
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomChef;