import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from '../helper/constants';


const ResMenu = () => {
    const [resData, setResData] = useState([]);
    const [menu, setMenu] = useState({});

    useEffect(() => { fetchData() }, []);

    // const params = useParams();
    // console.log(params);
    // const id = params.id;
    const { id } = useParams();
    // console.log(id);

    const fetchData = async () => {
        try {
            const data = await fetch("http://localhost:3000/data");
            const json = await data.json();
            const finalData = json.cards[1].card.card.gridElements.infoWithStyle.restaurants.filter((res) => res.info.id === id);
            setResData(finalData[0].info);
            // console.log(finalData);

            const menu = await fetch(`http://localhost:3500/${id}`);
            const menuJson = await menu.json();
            setMenu(menuJson.menu);
            // console.log("MenuJson: ", menuJson);


        } catch (error) {
            console.log(error);
        }
    }

    const image = IMAGE_URL + resData.cloudinaryImageId;

    return (
        <div className='p-40 pt-30 bg-amber-100'>
            <div className='shadow-blue-950 shadow-lg mb-4 p-5 rounded-2xl bg-pink-100 flex justify-between '>
                {/* restro data */}
                <div className='pl-10 '>
                    <span className='text-4xl font-bold '>Welcome to : <span className='text-purple-800 text-5xl'> {resData.name} </span>'s Menu </span>
                    <p className='mt-5'>Satisfy your cravings with these fresh and flavoursome Foods.</p>
                    <span className='inline-block mt-10 font-bold text-4xl text-amber-800'>⭐ {resData.avgRating}</span>
                </div>

                <div className='pr-10'>
                    <img src={image} alt="resData.name" className='h-48 w-72 m-5 shadow-orange-400 shadow-lg rounded-2xl ' />
                </div>
            </div>

            {/* Restro Menu */}
            <div className=' shadow-blue-950 shadow-lg rounded-2xl bg-emerald-100'>
                {
                    Object.entries(menu).map(([categoryName, items]) => (
                        <div key={categoryName} className='p-4 '>
                            <h2 className='text-2xl font-bold m-8'>
                                {categoryName}
                            </h2>
                            <hr className='h-0.5 m-8 bg-orange-600 border-0' />
                            <div className=' rounded-l m-7 '>
                                {
                                    items.map((i) => (
                                        <div key={i.name} className="shadow-blue-500 shadow-lg mb-5 m-2 p-8 font-bold rounded-2xl bg-pink-100 flex justify-between items-center">
                                            <div>
                                                <h3 className='text-xl'>
                                                    {i.name}
                                                </h3>
                                                <span className='text-green-900'>
                                                    Rs: {i.price}
                                                </span>
                                                <p>Description: {i.description}</p>
                                                <div className='mt-3'>
                                                    <span className='bg-gray-300 border-0 rounded-2xl pl-4 pr-2 p-2'>
                                                        {i.isVeg ? "Veg 🟢" : "Non-veg 🔴"}
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="bg-orange-600 text-white m-1 rounded-md p-2 hover:bg-orange-600 focus:bg-yellow-600 active:bg-green-800 cursor-pointer">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ResMenu;
