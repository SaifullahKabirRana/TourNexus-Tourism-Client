
import { useLoaderData } from "react-router-dom";
import TouristSpot from "./TouristSpot";
import { Fade,Slide } from "react-awesome-reveal";

const TouristSpots = () => {
    const touristSpots = useLoaderData();

    return (
        <div>
            <div className="mt-8 md:mt-12 lg:mt-14 xl:mt-16">
                <Slide>
                <h2 className="text-center font-quicksand text-2xl md:text-3xl lg:text-4xl font-bold">Tourists Spots</h2>
                </Slide>
                <Fade delay={700} cascade >
                <p className="text-center w-[90%] md:w-2/3 lg:w-2/3 xl:w-2/4 mx-auto text-xs md:text-sm lg:text-base font-openSans font-light mt-2 md:mt-3 lg:mt-4">Explore top tourist spots around the world, showcasing stunning landscapes, iconic landmarks, and vibrant cultural attractions</p>
                </Fade>
                <div className="grid lg:gap-y-3 md:grid-cols-2 lg:grid-cols-3  md:gap-x-5 lg:gap-x-4 xl:gap-x-7 mt-[20px] md:mt-[30px] lg:mt-[45px] mx-2 md:mx-4 2xl:mx-10">
                    {
                        touristSpots.slice(0,6).map(touristSpot => <TouristSpot
                        key={touristSpot._id}
                        touristSpot={touristSpot}
                        ></TouristSpot>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TouristSpots;