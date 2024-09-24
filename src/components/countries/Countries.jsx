import { useEffect, useState } from "react";
import Country from "./Country";
import { Fade, Slide } from "react-awesome-reveal";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div >
            <div className="mt-5 md:mt-7 lg:mt-10 mx-2 md:mx-4 lg:mx-0 2xl:mx-10 ">
                <Slide>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl  font-quicksand font-bold text-center">Countries</h2>
                </Slide>
                <Fade>
                    <p className="text-center w-[90%] md:w-3/4 lg:w-3/4 xl:w-3/5 mx-auto text-xs md:text-sm lg:text-base font-openSans font-light mt-2 md:mt-3 lg:mt-4 text-wrap">Explore six captivating destinations, each offering unique landscapes, rich cultures, and unforgettable experiences. Discover the beauty and adventure awaiting in every country!</p>
                </Fade>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6 lg:mt-8">
                    {
                        countries.map(country => <Country
                            key={country._id}
                            country={country}
                        ></Country>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Countries;