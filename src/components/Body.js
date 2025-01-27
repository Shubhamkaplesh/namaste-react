import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../Utils/mockData";
import swigyapi from "../Utils/2mockData";


const Body = () => {
  const listData = resList.map((e) => e.data)
  const swagyData = swigyapi.map((e) => e.info)
  const [listofRestaurents, setListOfRestraunt] = useState([...listData, ...swagyData]);

  return (
    <div className="body">
      <div className="filter">
        <button  type="button" class="btn btn-outline-primary"

          onClick={() => {
            const filteredList = listofRestaurents.filter(
              (res) => res.avgRating > 4.3
            );  
            
            setListOfRestraunt(filteredList);
          }}
            >
              Top Rated Restaurants
              </button>
      </div>

      
      <div className="res-container">

        {listofRestaurents.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />

        ))}
      </div>
    </div>
  );
};

export default Body;


