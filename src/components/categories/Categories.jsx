import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Category from "./Category";
import { AuthContext } from "../../providers/AuthProvider";


const Categories = () => {
    const categories = useLoaderData();
    const { loader } = useContext(AuthContext);
    if (loader) {
        return <div className='flex justify-center mt-[250px] md:mt-[350px]'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-black"></div>
        </div>
    }
    
    return (
        <div className="mt-4 md:mt-6 lg:mt-8">
            <h2 className="text-center font-quicksand text-2xl md:text-3xl lg:text-4xl font-bold">Countries Tourist Spots </h2>
            <div className="grid lg:gap-y-3 md:grid-cols-2 lg:grid-cols-3  md:gap-x-5 lg:gap-x-4 xl:gap-x-7 mt-[25px] md:mt-[30px] lg:mt-[45px] mx-2 md:mx-4 2xl:mx-10">
                {
                    categories.map(category => <Category
                    key={category._id}
                    category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;