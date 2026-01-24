import React from "react";
import { Link } from "react-router-dom";
import useUserStatus from "../hooks/useUserStatus";
import { Logo } from "../helper/constants";

const Header = () => {

    const onlineStatus = useUserStatus();

    return (
        <div className="fixed z-50 w-full bg-black text-white font-bold flex items-center">
            {/* Logo */}
            <div className="p-4 flex ">
                <img src={Logo} alt="logo" className="h-7 mr-2" />
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
                <li>
                    <Link >
                        Sign-In
                    </Link>
                </li>
                <li className="  ">
                    <Link to={"/cart"}>
                        Cart<i className="fa-solid fa-cart-shopping ml-1"></i>
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