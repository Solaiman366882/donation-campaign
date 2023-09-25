import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts.jsx/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistic from "../pages/Statistic/Statistic";
import DonationDetails from "../pages/DonatinDetails/DonationDetails";


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
                path:"/donation-detail/:id",
                element:<DonationDetails></DonationDetails>,
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