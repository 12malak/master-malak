
import './Seminar.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

const itemsPerPage = 6; // Define how many items to display per page 




const Seminar = () => {
  const [eventData, setEventData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Initialize the current page to 1
  const itemsPerPage = 6; 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = eventData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(eventData.length / itemsPerPage);



 //get all accepted food 
 useEffect(() => {
  async function fetch() {
    axios
      .get("http://localhost:8000/getAllEvents")
      .then((response) => {
        setEventData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  fetch();
}, []);


  const handleClick = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <a href="/" className="page-link" onClick={(event) => handleClick(event, i)}>
            {i}
          </a>
        </li>
      );
    }

    return pageNumbers;
  };
  return (
    <div className='body'>
    <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
          <h3 className="d-inline-block text-primary text-uppercase border-bottom border-5">
          الورشات و الندوات
  
          </h3>
          <h3 className="display-6 mb-5"> معا من أجل مرضى حساسية جلوتين القمح ومساندتهم</h3>
        </div>
          <>
          <div className="container"  dir="rtl" lang="ar">
    <div className="row">
    {currentItems.map((item) => {
  return (
    <div className="col-lg-4" key={item.id}>
      <div className="card card-margin">
        <div className="card-header no-border">
          {/* <h5 className="card-title">MOM</h5> */}
        </div>
        <div className="card-body pt-0">
          <div className="widget-49">
            <div className="widget-49-title-wrapper">
              <div className="widget-49-date-success">
                <span className="widget-49-date-day">333</span>
                <span className="widget-49-date-month"> 22</span>
              </div>
              <div className="widget-49-meeting-info">
                <span className="widget-49-pro-title">
                {item.eventTitle}
                </span>
                <span className="widget-49-meeting-time">
                  
                {item.eventDate}
                </span>
              </div>
            </div>
       
              <div className="widget-49-meeting-item">
                <span>
                {item.eventDesc}

                </span>
              </div>
            {/* <div className="widget-49-meeting-action">
              <a href="#" className="btn btn-sm btn-flash-border-primary">
                View All
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
})}
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">{renderPageNumbers()}</ul>
      </nav>
     
    </div>
   
  </div>
  
    </>
    </div>
  );
}

export default Seminar;