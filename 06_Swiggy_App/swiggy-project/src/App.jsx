import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Home from "./pages/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import ResMenu from "./components/ResMenu";

const App = ()=> {
  
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/feedback",
          element:<Feedback/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/restro/menu/:id",
          element:<ResMenu/>
        }
      ]
    }
  ])

  return(
    <RouterProvider router={routes} />
  )
}

// function App() {
//   createBrowserRouter()
//   return (
//     <>
//       <Header/>
//       <Body/>
//       <Footer/>
//     </>
//   )
// }

export default App;
