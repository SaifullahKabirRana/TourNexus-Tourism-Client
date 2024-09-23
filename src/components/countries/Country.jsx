
const Country = ({ country }) => {
    const { image, country_Name, description } = country;
    return (
        <div className="">
            <div className="flex lg:flex-row flex-col gap-3 lg:gap-4 border p-4 rounded-xl ">
                <div>
                    <img className="w-[400px] lg:max-w-[240px]  xl:max-w-[340px]  h-[200px] lg:min-h-[220px] xl:min-h-[250px] rounded-lg " src={image} alt="" />
                </div>
                <div className="">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-quicksand font-bold">{country_Name}</h2>
                    <p className="mt-1 md:mt-4 text-xs md:text-sm xl:text-base opacity-80 text-justify ">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Country;