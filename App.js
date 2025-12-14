import React from "react";
import ReactDOM from "react-dom/client";

// For multiple childs i.e siblings of the child we have to create array of the child 


// This looks more messy than the actual html :- so for this we use jsx not js
// const parent = React.createElement('div' ,{id:'parent'} ,
//     [React.createElement('div' ,{id:"child" , key:"child1"} ,
//       [ React.createElement('h1' ,{key:"h1-1"} , 'H1 from nested div') ,
//       React.createElement('h2' , {key:"h2-1"} ,'Hi I am  H2 ') ]) ,

//    React.createElement('div' ,{id:"child2" , key:"child2"} ,
//       [ React.createElement('h1' ,{key:"h1-2"} , 'H1 from nested div') ,
//       React.createElement('h2' , {key:"h2-2"} ,'Hi I am  H2 ') ]) ] );



// Day 3
// JSX => babel transpile to React.createElement => ReactElement (Object) => render => HTML element

// For multiple line we use (jsx1 jsx2);
// const jsxHeading = (<h1 id="h1" className="heading">Hey I am jsx heading 🚀</h1>);
// const root = ReactDOM.createRoot(document.getElementById('root'));  
// root.render(jsxHeading);



// components :- everything in jsx is just a component 
// two types :- class based-> old way of writing code  & functional-> generally and mainly used | new way
// Functional comp : is just a function that returns some jsx code / elements
// const number = 400;

// const head = <h3>I am a heading element </h3>
// const HeadingComponent = ()=>{
//      return <div>
//         {head}
//         <Title/>
//         {Title()} 
//         <h2>{number + 200}</h2>
//         <h1 id="h1">Hi I am a functional Heading component</h1>
//      </div> 
// };  // with return {} without return () // inside the parans{}in div we can execute any js code

// as soon as the div renders js code will be executed

// Or :- 
// const Title = ()=> <h1>Hi I am a title component</h1> ; // we can also write without return just like arrow function / b/c comp. is just a function;
//  to render this we use .

/**
 * Head
 * -logo
 * -nav-list
 * Body
 * -search
 * -rest-cards-container
 *   - rest-cards
 * Footer
 * - copyright
 * -links 
 * -adresses
 */

// Those component which are used repeatedly -> create functional component of that component
const resList =[ 
   {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "581971",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/b6c255ec-5775-41ec-a884-5cea991d9c38_581971.JPG",
"locality": "Kalani Nagar",
"areaName": "Kalani Nagar",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.1,
"parentId": "721",
"avgRatingString": "4.1",
"totalRatingsString": "2.4K+",
"sla": {
"deliveryTime": 32,
"lastMileTravel": 2.4,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "2.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-15 04:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Pizza.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Pizza.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹79"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "212"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-1d399acb-0558-444f-a151-d12d232e7ddf"
},
"cta": {
"link": "https://www.swiggy.com/city/indore/pizza-hut-kalani-nagar-rest581971",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "667764",
"name": "Burger Farm",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/10/e05b3ca0-8793-4d12-9187-1a5577e065bf_667764.JPG",
"locality": "Bhanwar Kuan",
"areaName": "Bhawar Kuan",
"costForTwo": "₹250 for two",
"cuisines": [
"Burgers",
"Beverages",
"Snacks",
"Desserts"
],
"avgRating": 4.2,
"parentId": "4660",
"avgRatingString": "4.2",
"totalRatingsString": "6.2K+",
"sla": {
"deliveryTime": 33,
"lastMileTravel": 5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "5.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-15 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹84"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.1",
"ratingCount": "431"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-1d399acb-0558-444f-a151-d12d232e7ddf"
},
"cta": {
"link": "https://www.swiggy.com/city/indore/burger-farm-bhanwar-kuan-bhawar-kuan-rest667764",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "881203",
"name": "Chinese Wok",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/7/2b1d78bb-5604-46db-99ba-02de93dc58a2_881203.jpg",
"locality": "Tukoganj Main road",
"areaName": "Treasure Island Indore",
"costForTwo": "₹250 for two",
"cuisines": [
"Chinese",
"Asian",
"Tibetan",
"Desserts"
],
"avgRating": 4.3,
"parentId": "61955",
"avgRatingString": "4.3",
"totalRatingsString": "1.4K+",
"sla": {
"deliveryTime": 47,
"lastMileTravel": 5.5,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "5.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-14 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹119"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-1d399acb-0558-444f-a151-d12d232e7ddf"
},
"cta": {
"link": "https://www.swiggy.com/city/indore/chinese-wok-tukoganj-main-road-treasure-island-indore-rest881203",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1035602",
"name": "Olio - The Wood Fired Pizzeria",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/12/3af615e7-71c1-40b4-83b4-5be9e0029d3a_1035602.JPG",
"locality": "1&2 Kibe Compound",
"areaName": "Madhumilan Square",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Fast Food",
"Snacks",
"Beverages"
],
"avgRating": 4.3,
"parentId": "11633",
"avgRatingString": "4.3",
"totalRatingsString": "1.1K+",
"sla": {
"deliveryTime": 44,
"lastMileTravel": 4.7,
"serviceability": "SERVICEABLE",
"slaString": "40-50 mins",
"lastMileTravelString": "4.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-15 05:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Newcomers.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-1d399acb-0558-444f-a151-d12d232e7ddf"
},
"cta": {
"link": "https://www.swiggy.com/city/indore/olio-the-wood-fired-pizzeria-1-and-2-kibe-compound-madhumilan-square-rest1035602",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "67500",
"name": "Pishori Restaurant",
"cloudinaryImageId": "ntfzr5mgmt9b9f545vtl",
"locality": "Sapna Sangeeta Road",
"areaName": "Bhawar Kuan",
"costForTwo": "₹450 for two",
"cuisines": [
"Mughlai",
"Kebabs",
"Biryani",
"Chinese"
],
"avgRating": 4.3,
"parentId": "158125",
"avgRatingString": "4.3",
"totalRatingsString": "22K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "5.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-14 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹149"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.0",
"ratingCount": "3.6K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-1d399acb-0558-444f-a151-d12d232e7ddf"
},
"cta": {
"link": "https://www.swiggy.com/city/indore/pishori-restaurant-sapna-sangeeta-road-bhawar-kuan-rest67500",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1072626",
"name": "Cheesecake & Co.",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/7f6b41f0-6c0d-4cbe-b42f-06ac566ec970_1072626.jpg",
"locality": "Godbole Colony",
"areaName": "Sudama Nagar",
"costForTwo": "₹300 for two",
"cuisines": [
"Bakery",
"Desserts"
],
"avgRating": 4.6,
"veg": true,
"parentId": "387417",
"avgRatingString": "4.6",
"totalRatingsString": "165",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 4.1,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "4.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-14 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-1d399acb-0558-444f-a151-d12d232e7ddf"
},
"cta": {
"link": "https://www.swiggy.com/city/indore/cheesecake-and-co-godbole-colony-sudama-nagar-rest1072626",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "878307",
"name": "99 Chickenwala",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/29/2696cb70-3e14-406a-9b8f-7b14b6427d7c_878307.jpg",
"locality": "North Hathipala",
"areaName": "Kalani Nagar",
"costForTwo": "₹200 for two",
"cuisines": [
"Indian"
],
"avgRating": 3.8,
"parentId": "514612",
"avgRatingString": "3.8",
"totalRatingsString": "1.1K+",
"sla": {
"deliveryTime": 35,
"lastMileTravel": 3,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-14 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-1d399acb-0558-444f-a151-d12d232e7ddf"
},
"cta": {
"link": "https://www.swiggy.com/city/indore/99-chickenwala-north-hathipala-kalani-nagar-rest878307",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id": "1198788",
"name": "Veer Ji Malai Chaap Wale",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/9/9b342ab6-6367-417f-b630-7b97b6c65e72_1198788.JPG",
"locality": "Mechanic Nagar",
"areaName": "Bhawar Kuan",
"costForTwo": "₹200 for two",
"cuisines": [
"Tandoor"
],
"avgRating": 3.7,
"veg": true,
"parentId": "12056",
"avgRatingString": "3.7",
"totalRatingsString": "46",
"sla": {
"deliveryTime": 32,
"lastMileTravel": 5.5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "5.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-12-14 23:30:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹75 OFF",
"subHeader": "ABOVE ₹199",
"discountTag": "FLAT DEAL"
},
"orderabilityCommunication": {
"title": {},
"subTitle": {},
"message": {},
"customIcon": {}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"isNewlyOnboarded": true,
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-1d399acb-0558-444f-a151-d12d232e7ddf"
},
"cta": {
"link": "https://www.swiggy.com/city/indore/veer-ji-malai-chaap-wale-mechanic-nagar-bhawar-kuan-rest1198788",
"text": "RESTAURANT_MENU",
"type": "WEBLINK"
},
"widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
];

const data = resList.map((resdata) =>resdata.info);
console.log(data);

const account1 = {
   owner :"himanshu kumar"
}
const account2 = {
   owner :"vinay kumar"
}
const account3 = {
   owner :"ravi kumar"
}

const accounts = [account1 ,account2 , account3]
accounts.forEach(function (acc){
   acc.user = acc.owner;
  console.log(acc.user.split(' ').map((name)=>name[0]).join(''));
   
})
const ResCard =(props)=>{ // we can also do destructuring in place of props
const {resData} = props ;
// Destructure of the resData :-
const {name , cuisines , avgRatingString , costForTwo} = resData.info;
   return(
      <div className="card">
         <img className="card-img"alt="Card-img"src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>
         <h3>{name}</h3>
         <h4> {avgRatingString} stars</h4>
         <h5>{cuisines.join(", ")}</h5>
         <h5>{costForTwo}</h5>
      </div>
   )
}

// Head :-
const Header = ()=>
     (
      <div className="head">
            <div className="logo">
              <img className="logo-img" alt="logo-img"src="https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg"/>
            </div>
            <div className="nav-links">
             <ul>
               <li>Home</li>
               <li>Contact us</li>
               <li>About</li>
               <li>Cart</li>
             </ul>
            </div>
         </div>
   );

   // Body :-
   // not using keys(Not acceptable) <<<<< index as key <<<<<<<<<<<<<<<<<<<<<<< unique id (Best practice :) )
const Body = ()=>{
   return(
      <div className="body">
            <div className="search">Search</div>
            <div className="res-card-container">
               {/* everytime it iterate into the list element -> obj , pass that obj to the ResCard component as props -> argument and also key */}
                {resList.map((restaurant) =>(
                  <ResCard key={restaurant.info.id} resData = {restaurant} />
                ))}


                {/* older method */}
               {/* <ResCard resData = {resList[1]}/>
               <ResCard resData = {resList[2]}/> */}
               {/* <ResCard resName="KFC" cusine="Burger, French Fries , Chicken Fires" imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/4df6c301-66e9-4b76-83cf-c44dfe08eaf7_975195.JPG"/> */}
            </div>
         </div>
   )
};

const AppLayout = ()=>{
   return (
      <div className="app">
         <Header/>
         <Body></Body>
      </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);