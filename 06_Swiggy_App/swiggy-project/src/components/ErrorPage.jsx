import React from "react";import { useNavigate, useRouteError } from "react-router-dom";
;

const  ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    console.log(error);
    
    return(
        <div>
            This is an Error Page!!!!!!

            <h2>
                {
                    error.data
                }
            </h2>
            <h3>
                status: {error.status}
            </h3>

            <button 
            onClick={()=> navigate("/")}
            className="bg-gray-600 text-white m-1 rounded-md p-3">
                Back to Home Page
            </button>
        </div>
    )
}
export default ErrorPage;