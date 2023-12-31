import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import DonationDetail from "../Components/DonationDetail";

const MyCreateRouter = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/donationdetail/:id",
                element:<DonationDetail></DonationDetail>
            }
        ]
    }
])

export default MyCreateRouter ;