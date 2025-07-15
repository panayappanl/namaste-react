import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const cardLevel1 = resData?.card;
  const cardLevel2 = cardLevel1?.card;
  const info = cardLevel2?.info;

  const name = info?.name;
  const avgRating = info?.avgRating;
  const cuisines = info?.cuisines;
  const costForTwo = info?.costForTwo;
  const slaString = info?.sla?.slaString;
  const cloudinaryImageId = info?.cloudinaryImageId;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
