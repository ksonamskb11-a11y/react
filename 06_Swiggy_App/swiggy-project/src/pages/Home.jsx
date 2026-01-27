import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import userContext from "../context/userContext";
import { useEffect, useState } from "react";

const Home = () => {
    const[name, setName] = useState("");
    const[login, setLogin] = useState(null);

    useEffect(()=>{
        // user data
        const data = {
            username:"Sonam",
            login:true
        }
        setName(data.username);
        setLogin(data.login);
    },[])
    return(
        <userContext.Provider value={{username:name,isLoggedIn:login}}>
            <Header/>
            <Outlet/>
        </userContext.Provider>
    )
}
export default Home;