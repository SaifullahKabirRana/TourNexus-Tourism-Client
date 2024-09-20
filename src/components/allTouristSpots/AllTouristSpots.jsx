import { useLoaderData } from "react-router-dom";
import AllTouristSpot from "./AllTouristSpot";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const AllTouristSpots = () => {
    const allTouristSpots = useLoaderData();
    const [spots, setSpots] = useState(allTouristSpots);
    const [sortOrder, setSortOrder] = useState('');

    const { loader } = useContext(AuthContext);
    if (loader) {
        return <div className='flex justify-center mt-[250px] md:mt-[350px]'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-black"></div>
        </div>
    }
    const handleSort = (e) => {
        const order = e.target.value;
        setSortOrder(order);

        if (order === 'asc') {
            const sortedSpots = [...spots].sort((a, b) => a.average_cost - b.average_cost);
            setSpots(sortedSpots);
        }
        else if (order === 'desc') {
            const sortedSpots = [...spots].sort((a, b) => b.average_cost - a.average_cost);
            setSpots(sortedSpots);
        }



    }
    return (
        <div className="mt-4 md:mt-6 lg:mt-8">
            <div >
                <h2 className="text-center font-quicksand text-2xl md:text-3xl lg:text-4xl font-bold">All Tourists Spot</h2>
                <div className="text-center mt-3 md:mt-5 lg:mt-7">
                    <select onChange={handleSort} className="select select-bordered  shadow-md border-[#56b63e] w-full max-w-[170px] md:max-w-[240px] lg:max-w-[280px] font-openSans">
                        <option disabled selected >Sort by Average Cost</option>
                        <option value='asc' >Low to High</option>
                        <option value='desc'>High to Low</option>
                    </select>
                </div>
                <div className="grid lg:gap-y-3 md:grid-cols-2 lg:grid-cols-3  md:gap-x-5 lg:gap-x-7 mt-[20px] md:mt-[30px] lg:mt-[45px] mx-2 md:mx-6 lg:mx-12">
                    {
                        spots.map(allTouristSpot => <AllTouristSpot
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