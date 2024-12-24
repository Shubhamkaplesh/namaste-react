import RestaurantCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import resList from "../Utils/mockData"


const Body = () => {
// local state variable- super powerful variable
 const [listofRestaurents, setlistofRestaurent] = useState(resList);
 

 useEffect(()=>{
  fetchData();
 }, []);

const fetchData = async () => {
  const Data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&collection=80475&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    
    const json = await Data.json();

    console.log(json);
  };


    return (
        <div className="body">
        <div className="filter">
         <button 
         className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurents.filter(
              (res)=>res.Data.avgRating > 4.3
          );
          setlistofRestaurent(filteredList);
         }}
         >
            Top Rated Restaurants
            </button> 
        </div> 
        <div className ="res-container">
         {listofRestaurents.map((restaurant) => ( 
         <RestaurantCard key={restaurant.Data.id} resData={restaurant} />
        ))}
        
        

      </div> 
    </div>
 );
};


export default Body;