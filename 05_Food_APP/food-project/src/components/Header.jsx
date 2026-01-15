const Header = () => {

    return(
        <div className="flex *:hover:bg-zinc-500 fixed z-1 w-full">
            <div className="bg-black text-white m-0 w-17 p-4 cursor-pointer ">
                Logo
            </div>
            <div  className=" w-full ">
                <ul className="bg-black text-white m-0 w-full flex *:flex **:p-2 **:hover:bg-zinc-500 ">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">FeedBack</a></li>
                    <li><a href="#">Sign-In</a></li>
                    <li><a href="#">Cart<i class="fa-solid fa-cart-shopping"></i></a></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;