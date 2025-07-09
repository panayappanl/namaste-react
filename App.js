import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *    - RestaurantCard
 *        - Image
 *        - Name of Res, Star Rating, Cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 *
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  const cardLevel1 = resData?.card;
  const cardLevel2 = cardLevel1?.card;
  const info = cardLevel2?.info;

  const name = info?.name;
  const avgRatingString = info?.avgRatingString;
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
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "10834",
          name: "Basil With A Twist",
          cloudinaryImageId: "j6xodxgd7hukpzkdzzz4",
          locality: "Thyagaraya Nagar",
          areaName: "Thyagaraya Nagar",
          costForTwo: "₹1500 for two",
          cuisines: ["Italian", "European"],
          avgRating: 4.5,
          parentId: "1506",
          avgRatingString: "4.5",
          totalRatingsString: "4.9K+",
          promoted: true,
          adTrackingId:
            "cid=30799520~p=2~adgrpid=30799520#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=10834~plpr=COLLECTION~eid=f4bce727-8d58-4319-9a6a-5c88118abda5~srvts=1751946329585~collid=80479",
          sla: {
            deliveryTime: 41,
            lastMileTravel: 6.4,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "6.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-08 22:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "3.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "30799520",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=10834&source=collection&query=Pasta",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "125298",
          name: "Writer's Cafe",
          cloudinaryImageId: "588e7998a6e40032116d5d26b5ba1289",
          locality: "Crescent Road",
          areaName: "Egmore",
          costForTwo: "₹400 for two",
          cuisines: ["Desserts", "Italian", "Bakery", "Pizzas"],
          avgRating: 4.5,
          parentId: "5989",
          avgRatingString: "4.5",
          totalRatingsString: "8.9K+",
          sla: {
            deliveryTime: 42,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-08 22:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Pizza.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Pizza.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "4.0K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=125298&source=collection&query=Pasta",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "410666",
          name: "The Goodlife Eatery",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/21/68761722-27d7-4e71-aae3-4b8773d41a8f_410666 (1).jpg",
          locality: "Whites Road Royapettah",
          areaName: "Mylapore",
          costForTwo: "₹500 for two",
          cuisines: [
            "Pizzas",
            "Healthy Food",
            "Italian",
            "Pastas",
            "Salads",
            "Desserts",
          ],
          avgRating: 4.5,
          parentId: "209058",
          avgRatingString: "4.5",
          totalRatingsString: "1.8K+",
          promoted: true,
          adTrackingId:
            "cid=30872668~p=3~adgrpid=30872668#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=410666~plpr=COLLECTION~eid=dc7d44a9-35d6-4c10-8e94-f6015b63f923~srvts=1751946329585~collid=80479",
          sla: {
            deliveryTime: 60,
            lastMileTravel: 7.6,
            serviceability: "SERVICEABLE",
            slaString: "60-65 mins",
            lastMileTravelString: "7.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-08 22:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "30872668",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=410666&source=collection&query=Pasta",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "368887",
          name: "Coffee? Since 1999",
          cloudinaryImageId: "pqpvlsg4pn1pqqrnqog0",
          locality: "Thousand Lights",
          areaName: "Thousand Lights",
          costForTwo: "₹600 for two",
          cuisines: ["Beverages", "Chinese", "Italian", "Desserts"],
          avgRating: 4.6,
          parentId: "64446",
          avgRatingString: "4.6",
          totalRatingsString: "3.5K+",
          sla: {
            deliveryTime: 38,
            lastMileTravel: 4.5,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "4.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-08 23:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "362",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=368887&source=collection&query=Pasta",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "559138",
          name: "Chai Sutta Bar",
          cloudinaryImageId: "zt2ygmlicrqjq8xdsd56",
          locality: "Opp Dav School",
          areaName: "Royapettah",
          costForTwo: "₹300 for two",
          cuisines: ["Pizzas", "Beverages", "Fast Food"],
          avgRating: 4.3,
          veg: true,
          parentId: "14909",
          avgRatingString: "4.3",
          totalRatingsString: "942",
          sla: {
            deliveryTime: 41,
            lastMileTravel: 5.8,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "5.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-08 23:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=559138&source=collection&query=Pasta",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "789332",
          name: "Bask by Coffee",
          cloudinaryImageId: "5b17fc2fe703cfaa5478f2994fdf2e1d",
          locality: "Teynampet",
          areaName: "Teynampet",
          costForTwo: "₹800 for two",
          cuisines: ["Beverages", "Italian", "Snacks", "Thai"],
          avgRating: 4.6,
          parentId: "469054",
          avgRatingString: "4.6",
          totalRatingsString: "1.1K+",
          sla: {
            deliveryTime: 44,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-08 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.4",
              ratingCount: "1.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=789332&source=collection&query=Pasta",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "482393",
          name: "Ciclo Cafe",
          cloudinaryImageId: "syhjgoqmf1sd1p69mln5",
          locality: "Anna Nagar",
          areaName: "Anna Nagar",
          costForTwo: "₹1000 for two",
          cuisines: ["Pizzas", "Continental", "Italian", "Bakery"],
          avgRating: 4.5,
          parentId: "3692",
          avgRatingString: "4.5",
          totalRatingsString: "3.1K+",
          sla: {
            deliveryTime: 57,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            slaString: "55-60 mins",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-09 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "671",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=482393&source=collection&query=Pasta",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "385842",
          name: "Spice Haat",
          cloudinaryImageId: "awootc4ifeopyh6ucs53",
          locality: "Teynampet",
          areaName: "Teynampet",
          costForTwo: "₹600 for two",
          cuisines: ["Indian", "Italian", "Desserts", "Bakery"],
          avgRating: 4.4,
          parentId: "517952",
          avgRatingString: "4.4",
          totalRatingsString: "157",
          sla: {
            deliveryTime: 47,
            lastMileTravel: 6.3,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "6.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-08 10:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Gourmet",
                      imageId: "newg.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "431",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=385842&source=collection&query=Pasta",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "293906",
          name: "Bistro Mylapore -By VV Food's",
          cloudinaryImageId: "tjri5astoou4679otvqh",
          locality: "Vanniar Street",
          areaName: "Choolaimedu",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese", "Mexican"],
          avgRating: 4.5,
          veg: true,
          parentId: "471853",
          avgRatingString: "4.5",
          totalRatingsString: "120",
          sla: {
            deliveryTime: 59,
            lastMileTravel: 6.9,
            serviceability: "SERVICEABLE",
            slaString: "55-60 mins",
            lastMileTravelString: "6.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-08 20:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=293906&source=collection&query=Pasta",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "293909",
          name: "3V's Bistro -By Vv Food's",
          cloudinaryImageId: "a4gios1oquyjegqiijzy",
          locality: "Vanniar Street",
          areaName: "Choolaimedu",
          costForTwo: "₹250 for two",
          cuisines: ["Pizzas"],
          avgRating: 4.3,
          veg: true,
          parentId: "453077",
          avgRatingString: "4.3",
          totalRatingsString: "71",
          sla: {
            deliveryTime: 51,
            lastMileTravel: 6.9,
            serviceability: "SERVICEABLE",
            slaString: "50-55 mins",
            lastMileTravelString: "6.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-07-08 20:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=293909&source=collection&query=Pasta",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget",
      },
    },
  },
];

// not using keys (not acceptable) <<<<< index as key <<<<<< unique id

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList?.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.card?.card?.info?.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
