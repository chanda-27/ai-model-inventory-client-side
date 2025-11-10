import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home/Home";
import AllVehicles from './../pages/AllVehicles/AllVehicles';
import AddVehicle from "../pages/AddVehicle/AddVehicle";
import MyVehicles from "../pages/MyVehicles/MyVehicles";
import MyBookings from "../pages/MyBookings/MyBookings";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element:<Home></Home>
            },
            {
                path: '/allVehicles',
                element:<AllVehicles></AllVehicles>
            },
            {
                path: '/addVehicle',
                element:<AddVehicle></AddVehicle>
            },
            {
                path: '/myVehicles',
                element:<MyVehicles></MyVehicles>
            },
            {
                path: '/myBookings',
                element:<MyBookings></MyBookings>
            },
        ]
        
    }
])
export default router