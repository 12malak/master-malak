import React, { useState,useEffect } from 'react';
import axios from "axios";


const itemsPerPage = 4; // Define how many items to display per page 


function FoodCard(props) {
  const { FilterDataUsers, setCurrentPageUsers } = props;


  const [foodData, setFoodData] = useState([]);
const itemsPerPage = 4; // Define how many items to display per page 

    const [currentPage, setCurrentPage] = useState(1); // Initialize the current page to 1

    
    
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = FilterDataUsers.slice(indexOfFirstItem, indexOfLastItem);
      
        const totalPages = Math.ceil(FilterDataUsers.length / itemsPerPage);
      
  //get all accepted food
  useEffect(() => {
    async function fetch() {
      axios
        .get("http://localhost:8000/getAllFoods")
        .then((response) => {
          
          setFoodData(response.data);
          console.log(foodData);
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
    <>
        
      <div>
      <div className="row">
        {currentItems.map((item) => (
          <div className="col-lg-6" key={item.id}>
            <div className="card">
              <h2 className="card-title">{item.foodName}</h2>
              <img className="img-drage" src={item.foodUrl} alt="" />
              <p className="card-desc pragragh">{item.foodDesc}</p>
            </div>
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">{renderPageNumbers()}</ul>
      </nav>
    </div> 
    </>
  )
}

export default FoodCard;