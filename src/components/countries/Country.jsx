import { Link } from "react-router-dom";

const Country = ({ country }) => {
    const { image, country_Name, description } = country;
    return (
        <div className=" transition-transform transform hover:scale-105 duration-300 hover:h2:text-[#56b63e]">
            <Link to={`/categories/${country_Name}`}>
                <div className="flex lg:flex-row flex-col gap-3 lg:gap-4 border p-4 rounded-xl shadow-md">
                    <div>
                        <img className="w-[400px] lg:max-w-[240px]  xl:max-w-[340px]  h-[200px] lg:min-h-[220px] xl:min-h-[250px] rounded-lg " src={image} alt="" />
                    </div>
                    <div className="">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-quicksand font-bold hover:text-[#56b63e]">{country_Name}</h2>
                        <p className="mt-1 md:mt-4 text-xs md:text-sm xl:text-base opacity-80 text-justify ">{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Country;