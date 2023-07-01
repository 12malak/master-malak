
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AiOutlineFilter,
} from "react-icons/ai";
const itemsPerPage = 4; // Define how many items to display per page 


function DrugCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [drugData, setdrugData] = useState([]);
  const [filteredDrugs, setFilteredDrugs] = useState([]);

  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = drugData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(drugData.length / itemsPerPage);


  
  const handleDietarySupplementsClick = () =>
    filterDrugs("Dietary_supplements");
  const handlePainkillersClick = () => filterDrugs("Painkillers");
  const handleAntibioticsClick = () => filterDrugs("Antibiotics");
  const handleChildrenMedicinesClick = () => filterDrugs("Children_medicines");
  const handleMedicinesForTheElderlyClick = () =>
    filterDrugs("Medicines_for_the_elderly");
  const handleCosmeticsClick = () => filterDrugs("Cosmetics");
  const handleAllClick = () => {
    setFilteredDrugs(drugData);
  };


 useEffect(() => {
    async function fetch() {
      axios
        .get("http://localhost:8000/getAllDrugs")
        .then((response) => {
          console.log(response.data);
          setdrugData(response.data);
          setFilteredDrugs(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetch();
  }, []);

  const filterDrugs = (type) => {
    const filtered = drugData.filter((drug) => drug.drugType === type);
    setFilteredDrugs(filtered);
  };


  // /////Started render pagination
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
      <div className="cards">
        <div className="row">
         {/* Render the drugs here */}
         {filteredDrugs.length > 0 ? (
  filteredDrugs.map((drug) => (
    currentItems.map((item) => (
      <div className="col-lg-6" key={item.id}>
        <div className="card">
          <h2 className="card-title">{item.drugName}</h2>
          <img className="img-drage" src={item.drugUrl} alt="" />
          <p className="card-desc pragragh">{item.drugDesc}</p>
        </div>
      </div>
    ))
  ))
) : (
  <div className="col-lg-12">
    <h2>لا يوجد ادوية مطابقة</h2>
  </div>
)}
        </div>
        <nav aria-label="Page navigation example"style={{ color:"red" }}>
          <ul className="pagination justify-content-center">{renderPageNumbers()}</ul>
        </nav>
        
      </div>
      <div className="mb-5 ">
      <AiOutlineFilter  className='social-footer' /> 
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">
             فرز الادويه :
              </h4>
              <div className="d-flex flex-wrap m-n1">
                <button
                  type="submit"
                  className="btn btn-primary m-1 bttnn"
                  onClick={handleDietarySupplementsClick}
                >
                  المكملات الغذائيه
                </button>
                <button
                  type="submit"
                  className="btn btn-primary m-1 bttnn"
                  onClick={handlePainkillersClick}
                >
                  المسكنات
                </button>
                <button
                  type="submit"
                  className="btn btn-primary m-1 bttnn"
                  onClick={handleAntibioticsClick}
                >
                  المضادات الحيوية
                </button>
                <button
                  type="submit"
                  className="btn btn-primary m-1 bttnn"
                  onClick={handleChildrenMedicinesClick}
                >
                  أدويه للاطفال
                </button>
                <button
                  type="submit"
                  className="btn btn-primary m-1 bttnn"
                  onClick={handleMedicinesForTheElderlyClick}
                >
                  أدويه لكبار السن
                </button>
                <button
                  type="submit"
                  className="btn btn-primary m-1 bttnn"
                  onClick={handleCosmeticsClick}
                >
                  مستحضرات تجميلية
                </button>
                <button
                  type="submit"
                  className="btn btn-primary m-2 bttnn"
                  onClick={handleAllClick}
                >
                  عرض الكل
                </button>
              </div>
            </div>
    </>
  );
}
export default DrugCard;
