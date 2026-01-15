import RestroCard from "./RestroCard";
import { resData } from "../data/restroData";
import { useState } from "react";

const Body = () => {
    const [data, setData] = useState(resData);

    const handleTopRated = () => {
        const topRated = resData.filter(d => d.rating > 4.5);
        setData(topRated);
    };

    const handleRating = () => {
        const sorted = [...resData].sort(
            (a, b) => b.rating - a.rating
        );
        setData(sorted);
    };

    const handleFastDelivery = () => {
        // const fastDelivery = resData.filter(d => d.deliveryTime < "25".toString());
        // setData(fastest);
        // Best Method: to convert into number not in string.
        const fastDelivery = resData.filter(d => parseInt(d.deliveryTime) < 25);
        setData(fastDelivery);
    };

    const handleFastest = () => {
        const sorted = [...resData].sort(
            (a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime)
        );
        setData(sorted);
    };

    const handleHighToLow = () => {
        const sorted = [...resData].sort(
            (a, b) => { parseInt(b.price) - parseInt(a.price) }
        );
        setData(sorted);
    };

    const handleLowToHigh = () => {
        const sorted = [...resData].sort(
            (a, b) => { parseInt(a.price) - parseInt(b.price) }
        );
        setData(sorted);
    };

    const all = () => {
             const All = resData;
                setData(All);
    };
    
    return (
        <div className="mt-16 relative inline-block">
            <div className="h-11 bg-gray-800 text-white justify-items-center relative group">

                <button onClick={all}
                    className="p-2 border-2 ml-2 border-red-700 rounded-2xl relative group">
                    All
                </button>
                <button onClick={handleTopRated}
                        // onClick={()=>{
                        //     const topRated = resData.filter((res)=> res.rating>4.5);
                        //     setData(topRated);
                        // }} 
                    className="p-2 border-2 ml-2 border-red-700 rounded-2xl relative group">
                    Top Rated Restro's
                </button>

                <button 
                    // onClick={handleFastDelivery}
                        onClick={()=> {
                                const fastest = resData.filter((res)=> res.deliveryTime < '25'.toString());
                                setData(fastest);
                            }}
                    className="p-2 border-2 ml-2 border-red-700 rounded-2xl relative group">
                    Fastest Delivery
                </button>
                <button onClick={handleHighToLow}
                    className="p-2 border-2 ml-2 border-red-700 rounded-2xl relative group">
                    *Cost: High to Low
                </button>
                <button onClick={handleLowToHigh}
                    className="p-2 border-2 ml-2 border-red-700 rounded-2xl relative group">
                    *Cost: Low to High
                </button>
                <button onClick={handleRating}
                    className="p-2 border-2 ml-2 border-red-700 rounded-2xl relative group">
                    Sort by Rating
                </button>
                <button onClick={handleFastest}
                    className="p-2 border-2 ml-2 border-red-700 rounded-2xl relative group">
                    Sort by Fastest Delivery
                </button>

            </div>
            <div className="flex flex-wrap justify-center bg-gray-600">
                {
                    data.map((res) => <RestroCard key={res.id} data={res} />)
                }
            </div>
        </div>
    );
}
export default Body;