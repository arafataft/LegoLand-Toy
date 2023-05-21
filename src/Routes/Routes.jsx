import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToys from "../pages/MyToys/MyToys";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<Register/>
            },
            {
                path:'/all-toys',
                element:<AllToys/>,
            },
            {
                path:'/add-toy',
                element:<PrivateRoute><AddAToy/></PrivateRoute> 
            },
            {
                path:'/myToys',
                element:<PrivateRoute><MyToys/></PrivateRoute> 
            },
            {
                path:'/toy/:id',
                element:<PrivateRoute><ViewDetails/></PrivateRoute>,
                loader: ()=>fetch('http://localhost:3000/allToy')
            },
            {
                path:'/blogs',
                element:<Blog/>
            }

        ]
    }
]);

export default router;