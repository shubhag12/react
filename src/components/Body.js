import { resList } from "../config";
import RestaurantCard from "./Restaurantcard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData=restaurants.filter((resaurant) => 
    resaurant.data.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  //search text is a local state variable
  const [searchText, setSearchText] = useState(""); //return a array where first element is variable and second is function and if we want to initiaze it with some value the we can put inside usestate
  const [restaurants, setRestaurant] = useState(resList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          
          onClick={() => {
            //need to fiter the data
            const data = filterData(searchText, restaurants);
            setRestaurant(data);
            //update the data based on the state
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((resaurant) => {
          return <RestaurantCard {...resaurant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
