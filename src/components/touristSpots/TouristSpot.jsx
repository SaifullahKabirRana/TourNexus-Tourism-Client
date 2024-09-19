import { IoLocationSharp } from "react-icons/io5";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { FaStreetView } from "react-icons/fa6";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const TouristSpot = ({ touristSpot }) => {
    const { _id, tourists_spot_name, location, average_cost, photo, travel_time, totalVisitorsPerYear } = touristSpot;
    return (
        <div className=" ">
            <div className=" ">
                <div className="">
                    <img className="rounded-xl" src={photo} alt="" />
                </div>
                <div className=" rounded-t-3xl rounded-b-xl shadow-lg px-4 md:px-5 lg:px-7 relative -top-6 bg-white pb-3 md:pb-5 lg:pb-7">
                    <div className="rating w-[60px] md:w-[75px] lg:w-[90px] mt-3 md:mt-4 lg:mt-5">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-quicksand font-semibold md:mt-2 text-black hover:text-[#56b63e]">
                        {tourists_spot_name}
                    </h2>
                    <div className="flex gap-1 md:gap-2 items-center text-sm md:text-base lg:text-lg mt-2 md:mt-3 lg:mt-4 font-openSans">
                        <IoLocationSharp className="text-[#56b63e]" />
                        <span className="text-black text-opacity-60">{location}</span>
                    </div>
                    <div className="flex gap-1 md:gap-2 items-center text-sm md:text-base lg:text-lg mt-1 md:mt-2 font-openSans">

                        <FaCircleDollarToSlot className="text-[#56b63e]" />
                        <span className="text-black text-opacity-60"> From <span className="text-orange-400 font-medium">{average_cost}$</span></span>
                    </div>
                    <hr className="mt-3 md:mt-4 lg:mt-7 border-dashed" />
                    <div className="flex justify-between mt-2 md:mt-3 lg:mt-4">
                        <div className="flex gap-2 md:gap-3 lg:gap-4  font-openSans">
                            <div className="flex gap-1 lg:gap-2  items-center text-sm md:text-base lg:text-lg ">
                                <IoTimeOutline className="text-[#56b63e] " />
                                <span className="text-black text-opacity-60">{travel_time}</span>
                            </div>
                            <div className="flex gap-1 lg:gap-2  items-center text-sm md:text-base lg:text-lg ">
                                <FaStreetView className="text-[#56b63e] " />
                                <span className="text-black text-opacity-60">{totalVisitorsPerYear}</span>
                            </div>
                        </div>
                        <Link to={`/viewDetails/${_id}`}>
                            <div className="flex items-center gap-1 text-sm md:text-[15px] lg:text-lg hover:text-[#56b63e]">
                                <span className="text-black hover:text-[#56b63e] text-opacity-70 font-quicksand font-semibold">View details</span>
                                <IoArrowForwardSharp />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpot;