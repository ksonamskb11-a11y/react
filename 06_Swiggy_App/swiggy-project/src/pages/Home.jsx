import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import userContext from "../context/userContext";
import { useEffect, useState } from "react";
import { Provider } from 'react-redux';
import appStore from "../store/store";

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
            <Provider store={appStore}>
            <Header/>
            <Outlet/>
            </Provider>
        </userContext.Provider>
    )
}
export default Home;