// const RestroCard = (props)=> {
// const RestroCard = (name,cuisines,deliveryTime,ratings,image)=> {
const RestroCard = ({data})=> {
  console.log(data);
  // console.log(props);
   // const name = data.name;
   // const cuisines = data.cuisines;

   const {name,cuisines,deliveryTime,rating,image,price}  = data;

   //  const {name,ratings,deliveryTime,cuisines}  = props; 
    
    // call: image,name,ratings,deliveryTime,cuisines
    return (
         <div className="bg-red-200 w-96 shadow-cyan-400 shadow-2xl m-10 p-4 rounded-2xl font-bold ">
            <img src={image} alt="restro-image" className="rounded-2xl duration-300 hover:scale-125 hover:opacity-90"/>
            <h2 className="text-2xl"> {name} </h2>
            <p className="text-fuchsia-800"> {rating} Stars </p>
            <p className="text-gray-800">{price}</p>
            <p>  Delivery with-in: {deliveryTime}</p>
            <p className="text-gray-600"> {cuisines.join(", ")} </p>
         </div>
    )
 }
export default RestroCard;