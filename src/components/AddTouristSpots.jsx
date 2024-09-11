

const AddTouristSpots = () => {
    const handleAddSpots = e => {
        e.preventDefault();
        const form = e.target;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const short_description = form.short_description.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const user_email = form.user_email.value;
        const user_Name = form.user_Name.value;
        const photo = form.photo.value;
        const newSpot = {
            tourists_spot_name, country_Name, location, average_cost, seasonality, short_description, travel_time, totalVisitorsPerYear, user_email, user_Name, photo 
        };
        console.log(newSpot);

    }
    return (
        <div>

            <div className='container mx-auto mt-4 md:mt-7 lg:mt-10'>
                <div className=' md:mx-16 lg:mx-28'>

                    <div className='shadow-lg  mt-[20px] md:mt-[35px] lg:mt-[50px] rounded-xl pb-[20px] md:pb-[35px] lg:pb-[50px]'>
                        <div className='px-[25px] md:px-[40px] lg:px-[60px] xl:px-[110px]'>
                            <h3 className='font-quicksand font-bold text-[28px] md:text-[35px] lg:text-[45px] text-[#374151] pt-[20px] md:pt-[30px] lg:pt-[40px] text-center'>Add Tourists Spot</h3>
                            <p className='font-openSans text-[12px] md:text-[14px] lg:text-[17px] text-[#1B1A1AB3] mt-2 md:mt-3 lg:mt-6 text-center px-2 lg:px-20 mb-4 md:mb-5 lg:mb-8'>TourNexus connects you to the best tourist spots, offering tailored adventures, stunning locations, and unforgettable travel experiences.</p>
                            <form onSubmit={handleAddSpots} className='font-raleway'>
                                <div className='md:flex md:gap-4 lg:gap-6'>
                                    <div className="form-control font-openSans w-full">
                                        <label className="label">
                                            <span className="label-text text-base md:text-lg lg:text-xl font-raleway font-semibold text-[#1B1A1ACC]">Name</span>
                                        </label>
                                        <input type="text" name='tourists_spot_name' placeholder="Enter tourists spot name" className="input input-bordered w-full text-[14px] md:text-[16px]" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-base md:text-lg lg:text-xl font-openSans font-semibold text-[#1B1A1ACC]">Country Name</span>
                                        </label>
                                        <select name="country_Name" className="select select-bordered w-full text-[14px] md:text-[16px]">
                                            <option disabled selected>Select a Country</option>
                                            <option>Bangladesh</option>
                                            <option>Thailand</option>
                                            <option>Indonesia</option>
                                            <option>Malaysia</option>
                                            <option>Vietnam</option>
                                            <option>Cambodia</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='md:flex md:gap-4 lg:gap-6 mt-3 md:mt-3 lg:mt-5'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-base md:text-lg lg:text-xl font-openSans font-semibold text-[#1B1A1ACC]">Location</span>
                                        </label>
                                        <input type="text" name='location' placeholder="Enter location" className="input input-bordered w-full text-[14px] md:text-[16px]" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-base md:text-lg lg:text-xl font-openSans font-semibold text-[#1B1A1ACC]">Average Cost
                                            </span>
                                        </label>
                                        <input type="text    " name='average_cost'
                                            placeholder="Enter average cost"
                                            className="input input-bordered w-full text-[14px] md:text-[16px]" required />
                                    </div>
                                </div>
                                <div className='md:flex md:gap-4 lg:gap-6 mt-3 md:mt-3 lg:mt-5'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-base md:text-lg lg:text-xl font-openSans font-semibold text-[#1B1A1ACC]">Seasonality</span>
                                        </label>
                                        <select  name="seasonality" className="select select-bordered w-full text-[14px] md:text-[16px]">
                                            <option  disabled selected>Select a Season</option>
                                            <option>Summer</option>
                                            <option>Winter</option>
                                        </select>
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-base md:text-lg lg:text-xl font-openSans font-semibold text-[#1B1A1ACC]">Short Description
                                            </span>
                                        </label>
                                        <input type="text" name='short_description' placeholder="Enter description" className="input input-bordered w-full text-[14px] md:text-[16px]" required />
                                    </div>
                                </div>
                                <div className='md:flex md:gap-4 lg:gap-6 mt-3 md:mt-3 lg:mt-5'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-base md:text-lg lg:text-xl font-openSans font-semibold text-[#1B1A1ACC]">Travel Time</span>
                                        </label>
                                        <input type="text" name='travel_time' placeholder="Enter travel time" className="input input-bordered w-full text-[14px] md:text-[16px]" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-base md:text-lg lg:text-xl font-openSans font-semibold text-[#1B1A1ACC]">Total Visitors Per Year
                                            </span>
                                        </label>
                                        <input type="number" name='totalVisitorsPerYear'
                                            placeholder="Enter total visitors per year"
                                            className="input input-bordered w-full text-[14px] md:text-[16px]" required />
                                    </div>
                                </div>
                                <div className='md:flex md:gap-4 lg:gap-6 mt-3 md:mt-3 lg:mt-5'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-base md:text-lg lg:text-xl font-openSans font-semibold text-[#1B1A1ACC]">User Email</span>
                                        </label>
                                        <input type="email" name='user_email' placeholder="Enter user email" className="input input-bordered w-full text-[14px] md:text-[16px]" required />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-base md:text-lg lg:text-xl font-openSans font-semibold text-[#1B1A1ACC]">User Name
                                            </span>
                                        </label>
                                        <input type="text" name='user_Name'
                                            placeholder="Enter user name"
                                            className="input input-bordered w-full text-[14px] md:text-[16px]" required />
                                    </div>
                                </div>
                                <div className='mt-3 md:mt-3 lg:mt-5'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-base md:text-lg lg:text-xl font-openSans font-semibold text-[#1B1A1ACC]">Photo</span>
                                        </label>
                                        <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered w-full text-[14px] md:text-[16px] " required />
                                    </div>
                                </div>
                                <input className='mt-4 md:mt-4 lg:mt-6 btn w-full text-white border-2 border-white bg-[#56b63e] font-quicksand text-lg md:text-xl lg:text-2xl hover:bg-[#F5F4F1] font-semibold' type="submit" value="Add Tourists Spot" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTouristSpots;