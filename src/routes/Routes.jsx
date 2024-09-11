import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../components/ErrorPages";
import Root from "../layout/Root";
import Home from "../components/Home";
import AddTouristSpots from "../components/AddTouristSpots";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPages></ErrorPages>,
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/addTouristSpots',
                element: <AddTouristSpots></AddTouristSpots>
            }
        ]
    },
]);

export default router;