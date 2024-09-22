import { useLoaderData } from "react-router-dom";
import { GiWorld } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { FaStreetView } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const ViewDetails = () => {
    const touristDetails = useLoaderData();
    const {  tourists_spot_name, country_Name, location, average_cost, photo, travel_time, totalVisitorsPerYear, seasonality, short_description } = touristDetails;
    return (
        <div className="mt-6 md:mt-10 lg:mt-14">
            <div className=" md:mx-20 lg:mx-36 xl:mx-44 2xl:mx-56">
                <div>
                    <img className="w-full h-[220px] md:h-[350px] lg:h-[430px] xl:h-[480px] 2xl:h-[550px] rounded-t-2xl" src={photo} alt="" />
                </div>
                <div className="shadow-lg rounded-b-2xl px-4 md:px-6 lg:px-8">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-quicksand font-semibold mt-3 md:mt-4 lg:mt-5 hover:text-[#56b63e]">{tourists_spot_name}</h2>
                    <p className="text-xs md:text-sm lg:text-base font-openSans  opacity-70 mt-1 md:mt-2 lg:mt-3 text-justify">{short_description}</p>
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-1 md:mt-2 lg:mt-3 text-[13px] md:text-base lg:text-lg  opacity-90 font-openSans">
                        <p className="">Country <span className="ml-8 md:ml-11">:</span> </p>
                        <div className="flex items-center gap-2">
                            <GiWorld className="text-[#56b63e]" />
                            <span>{country_Name}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-1 md:mt-2 text-[13px] md:text-base lg:text-lg  opacity-90 font-openSans">
                        <p className="">Location <span className="ml-7 md:ml-10">:</span> </p>
                        <div className="flex items-center gap-2">
                            <IoLocationSharp className="text-[#56b63e]" />
                            <span>{location}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-1 md:mt-2  text-[13px] md:text-base lg:text-lg  opacity-90 font-openSans">
                        <p className="">Travel Time <span className="ml-[10px] md:ml-4">:</span> </p>
                        <div className="flex items-center gap-2">
                            <IoTime className="text-[#56b63e]" />
                            <span>{travel_time}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-1 md:mt-2  text-[13px] md:text-base lg:text-lg  opacity-90 font-openSans">
                        <p className="">Total Visitor <span className="ml-2 md:ml-3">:</span> </p>
                        <div className="flex items-center gap-2">
                            <FaStreetView className="text-[#56b63e]" />
                            <span>{totalVisitorsPerYear}  <span className="text-xs md:text-sm lg:text-base">(per year)</span></span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-1 md:mt-2  text-[13px] md:text-base lg:text-lg  opacity-90 font-openSans">
                        <p className="">Travel Time <span className="ml-[10px] md:ml-4">:</span> </p>
                        <div className="flex items-center gap-2">
                            <IoTime className="text-[#56b63e]" />
                            <span>{travel_time}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-1 md:mt-2  text-[13px] md:text-base lg:text-lg  opacity-90 font-openSans">
                        <p className="">Seasonality <span className="ml-3 md:ml-4">:</span> </p>
                        <div className="flex items-center gap-2">
                            <span>{seasonality}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mt-1 md:mt-2  text-[13px] md:text-base lg:text-lg  opacity-90 font-openSans">
                        <p className="">Average Cost <span className="ml-[2px] md:ml-1">:</span> </p>
                        <div className="flex items-center gap-2">
                            <FaCircleDollarToSlot className="text-[#56b63e]" />
                            <span>Form</span>
                            <span className="text-orange-400 font-medium ">{average_cost}$</span>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-6 lg:mt-8 pb-4 md:pb-5 lg:pb-7">
                        <button className="btn text-[#56b63e] btn-sm md:btn-md btn-outline border-[#56b63e] font-bold font-quicksand"><FaShoppingCart className="text-xl" /> Add To Cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;