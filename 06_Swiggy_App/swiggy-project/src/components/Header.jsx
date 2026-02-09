import { useContext } from "react";
import { Link } from "react-router-dom";
import useUserStatus from "../hooks/useUserStatus";
// import { Logo } from "../helper/constants";
import userContext from "../context/userContext";
import { useSelector } from "react-redux";

const Header = () => {

    const onlineStatus = useUserStatus();

    // const data = useContext(userContext);
    // console.log(data, data.isLoggedIn, data.username);

    const {isLoggedIn,username} = useContext(userContext);      
    
    const cartItems = useSelector((state)=> state.cart.items)
    // console.log(cartItems);
    
    return (
        <div className="fixed z-50 w-full bg-black text-white font-bold flex items-center">
            {/* Logo */}
            <div className="p-4 flex ">
                {/* if you saved image in public folder, than u can use path as below simply */}
                <img src="/image/ODF.png" alt="logo" className="h-7 mr-2" />
                {/* or we can use 'Logo' instead path, with import {Logo} */}
                {/* <img src={ Logo } alt="logo" className="h-7 mr-2" /> */}
                Swiggy
            </div>
            {/* Nav */}
            <ul className="w-full flex justify-end *:p-5 *:cursor-pointer **:hover:bg-zinc-500 **:hover:text-cyan-200 ">
                <li>
                    <Link to={"/"}>
                        Home
                    </Link>
                </li>
                <li >
                    <Link to={"/about"}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to={"/feedback"}>
                        FeedBack
                    </Link>
                </li>
                <li className="bg-red-300 text-gray-800 rounded-full">
                    <Link >
                        {isLoggedIn ? username : "Please log-in"}
                    </Link>
                </li>
                <li>
                    <Link to={"/cart"}>
                        Cart({cartItems.length})<i className="fa-solid fa-cart-shopping ml-1"></i>
                    </Link>
                </li>
            </ul>
            <ul>
                <li className=" p-2 flex items-center">
                    <span>{onlineStatus ? "🟢" : "🔴"}</span>
                    <span>{onlineStatus ? "Online" : "Offline"}</span>
                </li>
            </ul>

        </div>
    );
}
export default Header;