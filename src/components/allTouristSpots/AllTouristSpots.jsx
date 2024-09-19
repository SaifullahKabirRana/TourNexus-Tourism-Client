import { useLoaderData } from "react-router-dom";
import AllTouristSpot from "./AllTouristSpot";

const AllTouristSpots = () => {
    const allTouristSpots = useLoaderData();
    return (
        <div className="mt-4 md:mt-6 lg:mt-8">
            <div>
                <h2 className="text-center font-quicksand text-2xl md:text-3xl lg:text-4xl font-bold">All Tourists Spot</h2>
                <div className="text-center mt-3 md:mt-5 lg:mt-7">
                    <select className="select select-bordered w-full max-w-[170px] md:max-w-[240px] lg:max-w-[280px]">
                        <option disabled selected>Who shot first?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                </div>
                <div className="grid lg:gap-y-3 md:grid-cols-2 lg:grid-cols-3  md:gap-x-5 lg:gap-x-7 mt-[20px] md:mt-[30px] lg:mt-[45px] mx-2 md:mx-6 lg:mx-12">
                    {
                        allTouristSpots.map(allTouristSpot => <AllTouristSpot
                        key={allTouristSpot._id}
                        allTouristSpot={allTouristSpot}
                        ></AllTouristSpot>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTouristSpots;