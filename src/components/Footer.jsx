import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Footer = () => {
    const { loader } = useContext(AuthContext);
    if (loader) {
        return
    }

    return (
        <div>
            <div className='bg-[#12132D0D] mt-12 md:mt-16 lg:mt-24 '>
                <div className='md:flex container mx-auto'>
                    <div className='mx-7 md:mx-10 pt-[35px] md:pt-[60px] lg:pt-[100px]'>
                        <h2 className="flex items-center gap-2 text-2xl md:text-3xl lg:text-4xl font-quicksand font-bold ">TourNexus
                        <GiCommercialAirplane />
                        </h2>
                        <p className=' text-[12px] md:text-[14px] lg:text-lg mt-2 md:mt-3 lg:mt-5 md:w-[60%] lg:w-[60%] font-openSans'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='mt-3 md:mt-5 lg:mt-7 flex gap-2 md:gap-3 lg:gap-4 text-[20px] md:text-[30px] lg::text-[40px]'>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><BsTwitterX /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                        <p className='font-quicksand text-[25px] md:text-[35px] lg:text-[45px] mt-3 md:mt-5 lg:mt-7'>Get in Touch</p>
                        <div className='flex flex-row items-center gap-2 md:gap-4 text-base md:text-[20px] mt-3 md:mt-5 lg:mt-7'>
                            <FaPhone className='text-[#63AB45]' />
                            <p className=' font-openSans text-[15px] md:text-[20px]'>+88 01533 333 333</p>
                        </div>
                        <div className='flex flex-row items-center gap-2 md:gap-4 text-base md:text-[20px] mt-1 md:mt-2 lg:mt-3 '>
                            <IoMdMail className='text-[#63AB45]' />
                            <p className=' font-openSans text-[15px] md:text-[20px]'>info@gmail.com</p>
                        </div>
                        <div className='flex flex-row items-center gap-2 md:gap-4 text-base md:text-[20px] mt-1 md:mt-2 lg:mt-3'>
                            <IoLocationSharp className='text-[#63AB45] text-[18px] md:text-[22px]' />
                            <p className='font-openSans text-[15px] md:text-[20px]'>72, Wall street, King Road, Dhaka</p>
                        </div>

                    </div>
                    <div className='ml-[30px] md:ml-0 mt-[25px] md:mr-14  lg:-ml-48 md:mt-[55px] lg:mt-[110px]'>
                        <section className="">
                            <form noValidate="" className="space-y-2 md:space-y-4 lg:space-y-6  ">
                                <h2 className=" text-[25px] md:text-[35px] lg:text-[45px] font-quicksand w-full">Connect with Us</h2>
                                <div>

                                    <input type="text" placeholder="Name" className="input bg-white h-[35px] md:h-[40px] lg:h-[50px] w-[250px] md:w-[280px] lg:w-[450px] text-[13px] md:text-[15px]" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" className="input bg-white h-[35px] md:h-[40px] lg:h-[50px] w-[250px] md:w-[280px] lg:w-[450px] text-[13px] md:text-[15px]" />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Message"
                                        className="textarea textarea-lg focus:border-none bg-white text-[13px] md:text-[15px] w-[250px] md:w-[280px] lg:w-[450px]"></textarea>
                                </div>
                                <div>
                                    <button className=' btn rounded-full btn-outline border-2  hover:bg-transparent hover:text-[#63AB45] hover:border-[#63AB45] font-quicksand text-[18px] md:text-[21px] lg:text-[24px] btn-sm md:btn-md'>Send Message</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
                <div className='mt-10 pb-4'>
                    <p className='text-center text-xs md:text-base lg:text-lg font-openSans'>©2025 TourNexus. All rights reserved.</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;