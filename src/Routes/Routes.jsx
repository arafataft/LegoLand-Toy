import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import AddAToy from "../pages/AddAToy/AddAToy";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
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
                loader: ()=>fetch('http://localhost:3000/allToys')
            },
            {
                path:'/add-toy',
                element:<AddAToy/>,
                
            }

        ]
    }
]);

export default router;