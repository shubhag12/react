import { IMG_CDN_URL } from "../config.js";
const RestaurantCard = ({name,cuisines,costForTwo,cloudinaryImageId}) => {
    return (
         <div className="card">
           <img
             src={
               IMG_CDN_URL +
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

   export default RestaurantCard;