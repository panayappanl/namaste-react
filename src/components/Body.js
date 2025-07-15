import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Schimmer from "./Schimmer";

const Body = () => {
  //Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  // whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.939646&lng=76.96186&collection=83655&tags=layout_CCS_Cake&sortBy=&filters=&type=rcv2&offset=0&page_type=null
`
    );

    const json = await data.json();
    console.log(json);

    // Optional Chaining
    setListOfRestaurants(
      json.data.cards?.filter((item) => item?.card?.card?.info)
    );
    setFilteredRestaurants(
      json.data.cards?.filter((item) => item?.card?.card?.info)
    );
  };

  //   Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Schimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res?.card?.card?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res?.card?.card?.info?.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.card?.card?.info?.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
