import logo1 from '../assets/man.png'
import logo2 from '../assets/mountains.png'
import logo3 from '../assets/rating.png'
import logo4 from '../assets/medal.png'

const Achievements = () => {
    return (
        <div className='mt-6 md:mt-9 lg:mt-14'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl uppercase font-quicksand font-bold text-center'>Achievements</h2>
            <section className=" my-1 md:p-6 lg:p-4 2xl:p-4 lg:my-2 2xl:mx-6 dark:text-gray-800">
                <div className="container grid grid-cols-2 gap-3 md:gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex p-4 space-x-3 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#6dee61] hover:bg-[#56b63e] w-[80px] md:w-[80px] md:h-[80px] h-[60px] mt-1 md:mt-0">
                            <img className=' md:w-[50px]' src={logo1} alt="" />
                        </div>
                        <div className="flex flex-col justify-center align-middle font-openSans">
                            <p className="text-lg md:text-3xl font-semibold leading-none">4500+</p>
                            <p className="capitalize text-xs md:text-lg">Happy Traveler</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-3 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#6dee61] hover:bg-[#56b63e]  w-[80px] md:w-[80px] md:h-[80px] h-[60px] mt-1 md:mt-0">
                            <img className=' md:w-[50px]' src={logo2} alt="" />
                        </div>
                        <div className="flex flex-col justify-center align-middle font-openSans">
                            <p className="text-lg md:text-3xl font-semibold leading-none">1200+</p>
                            <p className="capitalize text-xs md:text-lg">Tour Success</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-3 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#6dee61] hover:bg-[#56b63e]  w-[80px] md:w-[80px] md:h-[80px] h-[60px] mt-1 md:mt-0">
                            <img className=' md:w-[50px]' src={logo3} alt="" />
                        </div>
                        <div className="flex flex-col justify-center align-middle font-openSans">
                            <p className="text-lg md:text-3xl font-semibold leading-none">99.5%</p>
                            <p className="capitalize text-xs md:text-lg">Positive Reviews</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-3 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#6dee61] hover:bg-[#56b63e]  w-[80px] md:w-[80px] md:h-[80px] h-[60px] mt-1 md:mt-0">
                            <img className=' md:w-[50px]' src={logo4} alt="" />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-lg md:text-3xl font-semibold leading-none">200+</p>
                            <p className="capitalize text-xs md:text-lg">Awards Winning</p>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Achievements;