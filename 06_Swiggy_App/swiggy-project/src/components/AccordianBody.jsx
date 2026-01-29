import React,{useContext} from 'react';
import userContext from '../context/userContext';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

const AccordianBody = ({ items }) => {
    const dispatch = useDispatch();
    const {isLoggedIn,username} = useContext(userContext);
    return (
        <div>
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
                                    {/* this span is only to check- Is "userContext" hook is working or not on very Page? */}
                                    {/* <span className='bg-gray-300 border-0 rounded-2xl p-2 ml-4'>
                                        {isLoggedIn ? username : "P Log-In"}
                                    </span> */}
                                </div>
                            </div>
                            <div>
                                <button className="bg-orange-600 text-white m-1 rounded-md p-2 hover:bg-orange-600 focus:bg-yellow-600 active:bg-green-800 cursor-pointer"
                                        onClick={()=>{dispatch(addToCart(i, i.id))}}>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AccordianBody;