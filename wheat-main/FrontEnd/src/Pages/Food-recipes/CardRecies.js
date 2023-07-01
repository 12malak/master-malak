import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom"; 
const itemsPerPage = 3; // Define how many items to display per page 

function CardRecies(props) {
  const { FilterDataUsers, setCurrentPageUsers } = props;



  const [currentPage, setCurrentPage] = useState(1); // Initialize the current page to 1
  const [NameRecipe, setNameRecipe] = useState([]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = FilterDataUsers.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(FilterDataUsers.length / itemsPerPage);

  //get all accepted food 
  useEffect(() => {
    async function fetch() {
      axios.get("http://localhost:8000/getAllTrueConfirmations")
        .then((response) => {
          setNameRecipe(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetch();
  }, []);
  // ///////////////////////

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
    <>
      <div className='body-Recipes' >
        <div className="row" dir="ltr">
          {currentItems.map((item) => {
            const imageUrl =item.foodUrl;

            return (
              
              <div className="col-12 h-100" key={item.id}>
                <div className="wrap animate pop" style={{ textAlign: "right" }}>
                  <div className="overlay">
                    <div className="overlay-content animate  delay-2">
                
              
                  
              
              
               
              
                      {/* <h2 className="animate slide-right pop delay-4">  {item.price}</h2> */}
                      <p
                        className="animate slide-right pop delay-5"
                        style={{ color: "#252525", marginBottom: "2.5rem" }}
                      >
                      <em>  {item.phone}</em>
                      
                      </p>
                      <Link className="btn btn-white py-2 px-4 bttnnPayment" to="/Payment" style={{ background:"#fdfcfb"}}>
                  {" "}
                 شراء
                </Link>
                    </div>

                    <div
                      className="image-content animate slide delay-5"
                      style={{ backgroundImage: `url(${imageUrl})` }}
                    />          {/* {item.foodUrl} */}
                    <div className="dots animate">
                      <div className="dot animate slide-up delay-6" />
                      <div className="dot animate slide-up delay-7" />
                      <div className="dot animate slide-up delay-8" />
                    </div>
                  </div>
                  <div className="text" style={{color:"#252525"}}>
                    <h2 className="title">
                      {item.foodName}
                    </h2>
                  <p>
                      {item.foodDesc}
                    </p>
                    <h4 className="title">
                      الكميه :  {item.quantity}
                    </h4>
                    <h4 className="title">
                      السعر :  {item.price}
                    </h4>
                    
                    <h4 className="title">
                      اسم الشيف :  {item.name}
                    </h4>
                    <img className="img-drage" src={item.foodUrl} alt="" style={{ height: "223PX", width: "223PX" }} />

                  </div>
                </div>
              </div>
            );
          })}

        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">{renderPageNumbers()}</ul>
        </nav>

      </div>
    </>
  )
}

export default CardRecies;
