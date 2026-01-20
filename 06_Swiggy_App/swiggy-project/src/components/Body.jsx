import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState([]);

    // console.log(data);
    

    let time = 25;
    const handleRating = () => {
        const sorted = [...finalData].sort(
            (a, b) => b.finalData[0].info.avgRating - a.finalData[0].info.avgRating
        );
        setSort(sorted);
    };

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch("http://localhost:3000/data");
            const json = await data.json();
            const finalData = json.cards[1].card.card.gridElements.infoWithStyle.restaurants;
            // console.log(finalData);
            setData(finalData);
            setFiltered(finalData);
        } catch (error) {
            console.log(error);
        }
    }

    if (data.length === 0) {
        return (
            <Shimmer />
        )
    }

    return (
        <div className="pt-16 bg-gray-700 min-h-screen">

            <div className="h-14 bg-gray-800 text-white justify-items-center relative group">
                <input type="text" placeholder="Search here"
                    value={search}
                    onChange={() => {
                        const searched = data.filter((res) => res.info.name.toLowerCase().includes(search.toLowerCase()));
                        setFiltered(searched);
                    }}
                    onInput={(e) => setSearch(e.target.value)} className="bg-gray-300 p-2.5 rounded-md text-black ml-2 border-3 border-orange-500" />
                <button
                    onClick={() => {
                        handleRating
                        // const topRated = data.filter((res) => res.info.avgRating > 4.5);
                        // setFiltered(topRated);
                    }}
                    className="bg-gray-600 text-white m-1 rounded-md p-3 hover:bg-orange-600 focus:bg-yellow-600 active:bg-green-800 cursor-pointer">
                    Top Rated Restros
                </button>
                <button
                    onClick={() => {
                        const fastest = data.filter((res) => res.info.sla.deliveryTime < time);
                        // console.log(fastest);
                        setFiltered(fastest);
                    }}
                    className="bg-gray-600 text-white m-1 rounded-md p-3 hover:bg-orange-600 focus:bg-yellow-600 active:bg-green-800 cursor-pointer">
                    Fastest Delivery
                </button>
                <button className="bg-gray-600 text-white m-1 rounded-md p-3 hover:bg-orange-600 focus:bg-yellow-600 active:bg-green-800 cursor-pointer">

                    High to Low
                </button>
                <button className="bg-gray-600 text-white m-1 rounded-md p-3 hover:bg-orange-600 focus:bg-yellow-600 active:bg-green-800 cursor-pointer">
                    Low to High
                </button>
            </div>

            <h1 className="text-2xl font-bold ml-4 p-2 text-white">Restaurants To Explore</h1>
            <div className="flex flex-wrap justify-center bg-gray-800">
                {
                    filtered.map((res) => <Link to={`restro/menu/${res.info.id}`} key={res.info.id}> <RestroCard data={res.info} /></Link>)
                }
            </div>
        </div>
    )
}
export default Body;