

const Subscribe = () => {
    return (
        <div className="mt-5 md:mt-6 lg:mt-8 md:mx-6 lg:mx-10">
            <div className="w-full bg-[#12132D0D] rounded-xl border" >
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-10 md:py-20 mx-auto md:p-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl antialiased font-semibold leading-none text-center font-quicksand">Get Our Updates</h1>
                    <p className="pt-2 pb-5 md:pb-8 text-xs md:text-sm  lg:text-lg antialiased text-center font-openSans opacity-80">Find out about events and other news</p>
                    <div className="flex flex-row">
                        <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3 bg-white font-openSans text-[13px] md:text-base " />
                        <button type="button" className="w-2/5 p-3  rounded-r-lg sm:w-1/3 bg-[#56b63e] text-white font-quicksand font-bold text-sm md:text-base ">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;