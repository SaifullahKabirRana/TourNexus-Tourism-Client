import Banner from "./header/Banner";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import TouristSpots from "./touristSpots/TouristSpots";
import Achievements from "./Achievements";

const Home = () => {
    const { loader } = useContext(AuthContext);
    if (loader) {
        return <div className='flex justify-center mt-[250px] md:mt-[350px]'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-black"></div>
        </div>
    }
    return (
        <div>
            <Banner></Banner>
            <TouristSpots></TouristSpots>
            <Achievements></Achievements>
        </div>
    );
};

export default Home;