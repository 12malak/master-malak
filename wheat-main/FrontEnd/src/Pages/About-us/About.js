import React from 'react';
import about1 from "./about1.jpeg";
import '../Home/Home.css';
function About() {
  return (
    <>
   {/* About Start */}
  <div className="container-fluid py-5" dir="rtl" lang="ar">
  <div className="container">
    <div className="row gx-5">
      <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
        <div className="position-relative h-100">
          <img
            className="position-absolute w-100 h-100 rounded"
            src={about1}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="mb-4">
          <h3 className="d-inline-block text-primary text-uppercase border-bottom border-5">
          نبذة عنا
          </h3>
          <h1 className="display-6">
          جمعية أصدقاء مرضى حساسية القمح الخيرية
          </h1>
        </div>
        <p className='pragr1agh' style={{ fontSize:"20px" }}>
        نحن فريق متطوع من مختلف التخصصات قمنا بتأسيس أول جمعية في الأردن والوطن العربي لمرضى حساسية القمح مسجلة لدى وزارة التنمية الاجتماعية بتاريخ 11/1/2012 و تحمل الرقم الوطــني (2012011100009) نسعى الى توفير بيئـــة داعمــة ومتكاثفة لمرضى حساسية القمح (السيلياك) وهو مرض يُصيب الأمعاء الدقيقة بسبب مادة الجلوتين في القمح وينتج عنه ضمور شديد في خلايا إمتصاص الأغذية الموجودة في الأمعاء 
        </p>
        <div className="row g-3 pt-3">
          <div className="col-sm-3 col-6">
            <div className=" text-center rounded-circle py-4" style={{background:"#f9f2e7"}}>
              <i className="fa fa-3x fa-user-md text-primary mb-3" />
              <h3 className="mb-0">
                ندوات <small className="d-block text-primary">ورشات</small>
              </h3>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className=" text-center rounded-circle py-4" style={{background:"#f9f2e7"}}>
              {/* <i class="fa fa-3x fa-procedures text-primary mb-3"></i> */}
              <i className="fas fa-3x fa-utensils text-primary mb-3" />
              <h3 className="mb-0">
                أفضل<small className="d-block text-primary">الوصفات</small>
              </h3>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className=" text-center rounded-circle py-4" style={{background:"#f9f2e7"}}>
              {/* <i class="fa fa-3x fa-microscope text-primary mb-3"></i> */}
              <i className="fas fa-3x fa-carrot text-primary mb-3" />
              <h3 className="mb-0">
                موسوعه<small className="d-block text-primary">أطعمه</small>
              </h3>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className=" text-center rounded-circle py-4" style={{background:"#f9f2e7"}}>
              {/* <i class="fa fa-3x fa-ambulance text-primary mb-3"></i> */}
              <i className="fa fa-3x  fa-pills text-primary mb-3" />
              <h3 className="mb-0">
                موسوعه <small className="d-block text-primary">أدويه</small>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* About End */}
</>
  );
}

export default About;