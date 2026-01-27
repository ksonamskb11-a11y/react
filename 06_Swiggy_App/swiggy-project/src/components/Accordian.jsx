import React, { useState } from 'react';
import AccordianBody from './AccordianBody';
import { HiChevronDown } from "react-icons/hi2";

const Accordian = ({ categoryName, items }) => {
    const [menuOpen, setMenuOpen] = useState(true);

    console.log(menuOpen);

    return (
        <div className=' pb-4'>
            <div key={categoryName} className='pl-8 pr-8 '>
                <div className=' p-2 flex justify-between items-center ' onClick={() => setMenuOpen(!menuOpen)}>
                <h2 className='text-2xl font-bold m-2 '>
                    {categoryName}
                    <span> ({items.length}) </span>
                </h2>
                <p> <HiChevronDown /> </p>    
                </div>   
            </div>
        <hr className='h-1 ml-8 mr-8 mt-0 bg-orange-600 border-0 ' />
            {
                menuOpen && <AccordianBody items={items} />
            }
        </div>
    )
}
export default Accordian;