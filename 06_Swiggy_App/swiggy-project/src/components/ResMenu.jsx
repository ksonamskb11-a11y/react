import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_URL } from '../helper/constants';
import useRestroDataById from '../hooks/useRestroDataById';
import useRestroMenu from '../hooks/useRestroMenu';
import Accordian from './Accordian';

const ResMenu = () => {

    const { id } = useParams();
    const resData = useRestroDataById(id);
    const menu = useRestroMenu(id);

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
                        <Accordian
                            key={categoryName}
                            categoryName={categoryName}
                            items={items}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ResMenu;
