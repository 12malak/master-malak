import { useState, useEffect } from "react";
import axios from "axios";


function CardChef() {
   
    const [foodData, setFoodData] = useState([]);
    
    const [userId ,setUserId] = useState();


  

    
        const fetchUserCards = async () => {

            try {
                const token = localStorage.getItem("auth");
                if (token) {
                  const response = await axios.get("http://localhost:5000/protected", {
                    headers: {
                      Authorization: token,
                    },
                  });
                  setUserId(response.data.user.id)
                  let id=response.data.user.id
                  console.log(id)   
                  try {
                    const response = await axios.get(`http://localhost:8000/getAllTrueConfirmationsCard`); 
                    const data = response.data;
                    console.log(data)

                    setFoodData(data);
                  } catch (error) {
                    console.error('Error:', error);
                  } 
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
        fetchUserCards();
      }, []);


  return (
    <>
    
       <div className='body-Recipes' >
    <div className="row" dir="ltr">
    {foodData.map((item) => {
  return (
    <div className="col-12 h-100" >
      <div className="wrap animate pop" style={{textAlign:"right"}}>
        <div className="overlay">
          <div className="overlay-content animate  delay-2">
            <h2 className="animate slide-right pop delay-4">  {item.price}</h2>
            <p
              className="animate slide-right pop delay-5"
              style={{ color: "rgb(253, 252, 253)", marginBottom: "2.5rem" }}
            >
              للاستفسار : <em>  {item.phone}</em>
            </p>
          </div>
          <div className="image-content animate slide delay-5"  />
          {/* {item.foodUrl} */}
          <div className="dots animate">
            <div className="dot animate slide-up delay-6" />
            <div className="dot animate slide-up delay-7" />
            <div className="dot animate slide-up delay-8" />
          </div>
        </div>
        <div className="text">
          <h2 className="title">
            {item.foodName}
          </h2>
          <h4 className="title">
           الكميه :  {item.quantity}
          </h4>
          <p>
            {item.foodDesc}
          </p>
          <h4 className="title">
          اسم الشيف :  {item.name}
          </h4>
          <img className="img-drage" src={item.foodUrl} alt="" style={{height:"223PX",width:"223PX"}} />
        
        </div>
      </div>
    </div>
  );
})}

      </div>
      
    
    </div>
    </>
  )
}

export default CardChef;
