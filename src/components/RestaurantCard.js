
import { CDN_URL } from "../Utils/constants"

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData;


  return (
    


    <div className="card" style={{ width: "18rem" }}>
    <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{cuisines}</p>
      <p className="card-rating">{avgRating} stars</p>
      <p className="card-price">{costForTwo}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
  
  
    
    // <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
    //   <img className="res-logo"
    //     alt="res-logo"
    //     src={CDN_URL + cloudinaryImageId}
    //   />
    //   <h3>{name}</h3>
    //   <h4>{cuisines.join(", ")}</h4>
    //   <h4>{avgRating} stars</h4>
    //   <h4>{costForTwo} </h4>
    //   <h4>{deliveryTime} minutes</h4>
    // </div>




  );
};


export default RestaurantCard;