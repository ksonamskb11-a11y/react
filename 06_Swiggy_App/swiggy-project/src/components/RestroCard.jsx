import { IMAGE_URL } from "../helper/constants";

const RestroCard = ({data})=> {
//   console.log(data);

   const {name,cuisines,avgRating,cloudinaryImageId,costForTwo}  = data;
   const {sla} = data;
   const {deliveryTime} = sla;
   const image = IMAGE_URL+cloudinaryImageId;

    // call: image,name,ratings,deliveryTime,cuisines
    return (
         <div className="bg-red-200 w-80 shadow-cyan-400 shadow-2xl m-10 p-4 rounded-2xl font-bold ">
            <img src={image} alt="restro-image" className="rounded-2xl duration-300 hover:scale-125 hover:opacity-90"/>
            <h2 className="text-2xl"> {name} </h2>
            <p className="text-fuchsia-800">Ratings: {avgRating} Stars </p>
            <p className="text-gray-800">Price: {costForTwo}</p>
            <p> Delivery with-in: {deliveryTime}</p>
            <p className="text-gray-600">Cuisines: {cuisines.join(", ")} </p>
         </div>
    )
 }

export const cardWithLabel = (RestroCard) => {

   return(props)=>{
         const {isOpen} = props.data;
         // console.log(isOpen);

         return(
            <>
            <label className="absolute text-white font-bold text-2xl p-3 m-13.5 rounded-2xl bg-amber-500">
               {
                  isOpen ? "Open" : "Closed"
               }
            </label>
            <RestroCard {...props}/>
            </>
         )     
   }
}

export default RestroCard;