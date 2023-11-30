import React from "react";
import ReactDOM from "react-dom/client";

// const container = React.createElement("div", { id: "Container" }, [
//   React.createElement(
//     "h1",
//     {
//       id: "tile",
//     },
//     "heading 1"
//   ),
//   React.createElement("ul", {}, [React.createElement(
//     "li",{},"about us"
//   )],[React.createElement(
//     "li",{},"support"
//   )],[React.createElement(
//     "li",{},"home"
//   )]),
// ]);

//this is not necessary now we will move with jsx
// const root = ReactDOM.createRoot(document.getElementById("root"));

// const heading = React.createElement(
//   "div",
//   { id: "title", class: "h1" },
//   "namaster React"
// );
// //passiing a react element in a root
// root.render(heading);
//not if we have many h1 tages in div body and so question is wheter it will replace
//all theh1 tags or it will come below it ans it will replace the tags

//now to write the whole same thing using jsx what shall we do

//THIS IS A REACT ELEMENT AS THERE IS NO FUNCTION
//AS REACT ELEMENT IS JUST AN OBJECT
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?w=826&t=st=1701241939~exp=1701242539~hmac=6d7b7bdc01f45972d2974e5ea0264332803ca5cfe89f9ebd609df1cb8e603b30"
      alt="logo"
    />
  </a>
); //the circular bracket directly comes through prettier not necessary if there is one line but necessary if multiple line

//THIS IS A REACT COMPONENT AS THERE IS A FUNCTION
//IT IS A FUNCTIONAL COMPONENT

//note we can write any javascript code inside jsx just by enclosing in the {} bracket

const Header = () => {
  return (
    //including a react element in a react component

    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//WHEN TO RENDER REACT ELEMENT WE DO LIKE THIS
//root.render(heading1);

//WHEN TO RENDER  REACT COMPONENT WE DO LIKE THIS

//these are the config for config site rendering and this is a good practice to follow
//
const config = [
  {
    type: "carousel",
    cards: [{ offername: "50% offer" }, { offername: "Free delivery" }],
  },
  {
    type: "restaurants",
    cards: [
      {
        name: "Burger King",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        cuisines: ["Burger", "American"],
        rating: "4.2",
      },
      {
        name: "kfc",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        cuisines: ["non veg", "American"],
        rating: "4.2",
      },
      {
        name: "kfc",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
        cuisines: ["non veg", "American"],
        rating: "4.2",
      },
    ],
  },
];

const resList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334475",
      name: "KFC",
      uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
      city: "1",
      area: "BTM Layout",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      slaString: "36 MINS",
      lastMileTravel: 3.5,
      slugs: {
        restaurant: "kfc-btm-layout-btm",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
      locality: "2nd Stage",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "121603",
      name: "Kannur Food Point",
      uuid: "51983905-e698-4e31-b0d7-e376eca56320",
      city: "1",
      area: "Tavarekere",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
      cuisines: ["Kerala", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 3,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "121603",
      name: "Kannur Food Point",
      uuid: "51983905-e698-4e31-b0d7-e376eca56320",
      city: "1",
      area: "Tavarekere",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
      cuisines: ["Kerala", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "kannur-food-point-btm",
        city: "bangalore",
      },
    },
  },
];

//props means properties
//we can destructure    props to {resaurant}
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, costForTwo }) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,e_grayscale,c_fit/" +
          cloudinaryImageId
        }
        alt=""
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{costForTwo} </h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restaurant-list">
      {resList.map((resaurant) => {
        return <RestaurantCard {...resaurant.data} />;
      })}
    </div>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

// const jsx = (
//   <div style={{
//     backgroundColor:"red"
// }}>
//     <h1>jsx</h1>
//     <h2>hi</h2>
//   </div>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

//we can include react element in a react component also by just enclosing in {}
//we can include a react component in a react component by just putting it as a tag
