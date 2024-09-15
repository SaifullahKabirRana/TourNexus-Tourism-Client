import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../components/ErrorPages";
import Root from "../layout/Root";
import Home from "../components/Home";
import AddTouristSpots from "../components/AddTouristSpots";
import Register from "../components/Register";
import Login from "../components/Login";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPages></ErrorPages>,
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/touristSpot')
            },
            {
                path: '/addTouristSpots',
                element: <PrivateRoutes><AddTouristSpots></AddTouristSpots></PrivateRoutes>,
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);

export default router;