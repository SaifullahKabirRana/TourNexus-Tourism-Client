import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../components/ErrorPages";
import Root from "../layout/Root";
import Home from "../components/Home";
import AddTouristSpots from "../components/AddTouristSpots";
import Register from "../components/Register";
import Login from "../components/Login";
import PrivateRoutes from "./PrivateRoutes";
import ViewDetails from "../components/touristSpots/ViewDetails";
import AllTouristSpots from "../components/allTouristSpots/AllTouristSpots";
import MyLists from "../components/myLists/MyLists";
import UpdateTouristSpots from "../components/UpdateTouristSpots";
import Categories from "../components/categories/Categories";




const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPages></ErrorPages>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/touristSpot')
            },
            {
                path: '/addTouristSpots',
                element: <PrivateRoutes><AddTouristSpots></AddTouristSpots></PrivateRoutes>,
            },
            {
                path: '/updateTouristSpots/:id',
                element: <PrivateRoutes><UpdateTouristSpots></UpdateTouristSpots></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/touristSpot/${params.id}`)
            },
            {
                path: '/allTouristSpots',
                element: <AllTouristSpots></AllTouristSpots>,
                loader: () => fetch('http://localhost:5000/touristSpot')
            },
            {
                path: '/myList',
                element: <PrivateRoutes><MyLists></MyLists></PrivateRoutes>

            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/viewDetails/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/touristSpot/${params.id}`)
            },
            {
                path: '/categories/:country',
                element: <Categories></Categories>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.country}`)
            }
        ]
    },
]);

export default router;