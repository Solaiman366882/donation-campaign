import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts.jsx/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistic from "../pages/Statistic/Statistic";


const myRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch('/donate.json'),
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/donation/:id",
                element:<Donation></Donation>,
                loader:() => fetch('/donate.json'),
            },
            {
                path:"/statistic",
                element:<Statistic></Statistic>
            }
        ]
    }
])

export default myRoute;