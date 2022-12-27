import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
      
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
    }
])

export default router