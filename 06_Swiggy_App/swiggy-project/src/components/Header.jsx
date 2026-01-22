import React from "react";
import { Link } from "react-router-dom";
import useUserStatus from "../hooks/useUserStatus";

const Header = () => {

    const onlineStatus = useUserStatus();

    return (
        <div className="flex  *:hover:bg-zinc-500 fixed z-1 w-full">
            <div className="bg-black text-white m-0 w-100 p-4 cursor-pointer font-bold flex">
                <img src="\src\image\ODF.png" alt="image" className="h-7 mr-2"/>
                Swiggy Logo
            </div>
            <div className=" w-full ">
                <ul className="bg-black text-white m-0 w-full flex justify-end *:flex **:p-2 **:hover:bg-zinc-500 ">
                    <li className="hover:text-cyan-200 cursor-pointer font-bold">
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li className="hover:text-cyan-200 cursor-pointer font-bold">
                        <Link to={"/about"}>
                            About
                        </Link>
                    </li>

                    <li className="hover:text-cyan-200 cursor-pointer font-bold ">
                        {
                            onlineStatus===true ? "Online🟢" : "Offline🔴"
                        }
                    </li>

                    <li className="hover:text-cyan-200 cursor-pointer font-bold">
                        <Link to={"/feedback"}>
                            FeedBack
                        </Link>
                    </li>
                    <li className="hover:text-cyan-200 cursor-pointer font-bold">
                        <Link >
                            Sign-In
                        </Link>
                    </li>
                    <li className="hover:text-cyan-200 cursor-pointer font-bold">
                        <Link to={"/cart"}>
                            Cart<i className="fa-solid fa-cart-shopping"></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Header;