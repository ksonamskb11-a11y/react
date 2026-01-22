import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const  ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    console.log(error);
    
    return(
        <div className="bg-gray-400 text-center text-4xl font-bold h-screen pt-50 ">
            This is an Error Page!!!!!!

            <h2 className="m-4">
                {
                    error.data
                }
            </h2>
            <h3>
                Status: {error.status}
            </h3>

            <button 
            onClick={()=> navigate("/")}
            className="bg-gray-600 text-white m-5 rounded-4xl p-5">
                Back to Home Page
            </button>
        </div>
    )
}
export default ErrorPage;