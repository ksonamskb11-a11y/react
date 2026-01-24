import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestroData from "../hooks/useRestroData";
import useUserStatus from "../hooks/useUserStatus";
import { cardWithLabel } from "./RestroCard";

const Body = () => {

    const onlineStatus = useUserStatus();
    const RestroCardWithLabel = cardWithLabel(RestroCard);

    let time = 25;

    const { data, filtered, search, sort, setSort, setFiltered, setSearch, setData } = useRestroData();

    if (data.length === 0) {
        return (
            <Shimmer />
        )
    }

    if (!onlineStatus) {
        return (<h1 className=" pt-60 text-center text-4xl font-bold">You are Offline!!!!! <br /> Please connect your Internet!!!!!!!</h1>);
    }

    const getCost = (string) => {
        return(Number(string.replace(/\D/g, "")));
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
                        // handleRating();
                        const topRated = data.filter((res) => res.info.avgRating > 4.5);
                        setFiltered(topRated);
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
                <button className="bg-gray-600 text-white m-1 rounded-md p-3 hover:bg-orange-600 focus:bg-yellow-600 active:bg-green-800 cursor-pointer"
                   onClick={()=> { const sorted = [...data].sort((a, b) =>  getCost(b.info.costForTwo) - getCost(a.info.costForTwo));
                    setFiltered(sorted);
                   }}>
                    Price: High to Low
                </button>
                <button className="bg-gray-600 text-white m-1 rounded-md p-3 hover:bg-orange-600 focus:bg-yellow-600 active:bg-green-800 cursor-pointer"
                    onClick={()=> { const sorted = [...data].sort((a, b) =>  getCost(a.info.costForTwo) - getCost(b.info.costForTwo));
                    setFiltered(sorted);
                   }}>
                    Price: Low to High
                </button>
            </div>

            <h1 className="text-2xl font-bold ml-4 p-2 text-white">Restaurants To Explore</h1>
            <div className="flex flex-wrap justify-center bg-gray-800">
                {
                    // filtered.map((res) => <Link to={`restro/menu/${res.info.id}`} key={res.info.id}> <RestroCard data={res.info} /></Link>)
                    filtered.map((res) =>
                        <Link to={`restro/menu/${res.info.id}`} key={res.info.id}>
                            {
                                res.info.isOpen ? <RestroCardWithLabel data={res.info} /> : <RestroCard data={res.info} />
                            }
                        </Link>)
                }
            </div>
        </div>
    )
}
export default Body;