import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'

const Banner = () => {
    return (
        <div className="mt-4 md:mt-5 lg:mt-6">
            <Swiper
                 spaceBetween={30}
                 centeredSlides={true}
                 autoplay={{
                     delay: 2000,
                     disableOnInteraction: false,
                 }}
                 pagination={{
                    clickable: true,
                }}
                 navigation={true}
                 modules={[Autoplay, Pagination, Navigation]}
                 loop={true}
            >
                {/* banner-1 */}
                <SwiperSlide> 
                    <div className="banner-4 rounded-badge bg-no-repeat bg-cover bg-top min-h-[35vh] md:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh]">
                <div className="py-16 md:py-28 lg:py-44 xl:py-52 pl-8 md:pl-16 lg:pl-20 xl:pl-28">
                    <h2 className="font-quicksand text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-extrabold">Explore The Worlds</h2>
                    <p className="font-openSans text-white text-sm md:text-lg lg:text-xl xl:text-2xl py-2 md:py-3 lg:py-4">People Don’t Take, Trips Take People</p>
                    <button className="btn btn-sm md:btn-md border-none bg-[#56b63e] text-white text-sm md:text-lg md:px-6 font-quicksand mt-1 md:mt-2 lg:mt-4">Let’s Get Started</button>
                </div>
            </div>
            </SwiperSlide>
                 {/* banner-2 */}
                <SwiperSlide><div className="banner-2 rounded-badge bg-no-repeat bg-cover bg-top min-h-[35vh] md:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh]">
                <div className="py-16 md:py-28 lg:py-44 xl:py-52 pl-8 md:pl-16 lg:pl-20 xl:pl-28">
                    <h2 className="font-quicksand text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-extrabold">Explore The Worlds</h2>
                    <p className="font-openSans text-white text-sm md:text-lg lg:text-xl xl:text-2xl py-2 md:py-3 lg:py-4">People Don’t Take, Trips Take People</p>
                    <button className="btn btn-sm md:btn-md border-none bg-[#56b63e] text-white text-sm md:text-lg md:px-6 font-quicksand mt-1 md:mt-2 lg:mt-4">Let’s Get Started</button>
                </div>
            </div>
            </SwiperSlide>
            {/* banner-3 */}
                <SwiperSlide> 
                    <div className="banner-3 rounded-badge bg-no-repeat bg-cover bg-top min-h-[35vh] md:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh]">
                <div className="py-12 md:py-28 lg:py-36 xl:py-44 pl-8 md:pl-16 lg:pl-20 xl:pl-28">
                    <h2 className="font-quicksand text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-extrabold md:w-[75%] xl:w-[60%]">Tour Travel & Adventure Camping</h2>
                    <p className="font-openSans text-white text-sm md:text-lg lg:text-xl xl:text-2xl py-2 md:py-3 lg:py-4">People Don’t Take, Trips Take People</p>
                    <button className="btn btn-sm md:btn-md border-none bg-[#56b63e] text-white text-sm md:text-lg md:px-6 font-quicksand mt-1 md:mt-2 lg:mt-4">Let’s Get Started</button>
                </div>
            </div>
            </SwiperSlide>
            {/* banner-4 */}
                <SwiperSlide>
                    <div className="banner-1 rounded-badge bg-no-repeat bg-cover bg-top min-h-[35vh] md:min-h-[60vh] lg:min-h-[70vh] xl:min-h-[80vh]">
                <div className="py-16 md:py-28 lg:py-44 xl:py-52 pl-8 md:pl-16 lg:pl-20 xl:pl-28">
                    <h2 className="font-quicksand text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-extrabold">Explore The Worlds</h2>
                    <p className="font-openSans text-white text-sm md:text-lg lg:text-xl xl:text-2xl py-2 md:py-3 lg:py-4">People Don’t Take, Trips Take People</p>
                    <button className="btn btn-sm md:btn-md border-none bg-[#56b63e] text-white text-sm md:text-lg md:px-6 font-quicksand mt-1 md:mt-2 lg:mt-4">Let’s Get Started</button>
                </div>
            </div>
            </SwiperSlide>
            </Swiper>
            
        </div>
    );
};

export default Banner;