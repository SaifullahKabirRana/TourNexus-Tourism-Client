import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const MyList = ({ item, index }) => {
    const { _id, tourists_spot_name, country_Name, average_cost } = item;

    return (
        <>
            <tbody>
                <tr className="text-[10px] md:text-sm lg:text-base">
                    <th className="hidden md:flex">{index + 1}</th>
                    <td className="font-bold">{tourists_spot_name}</td>
                    <td className="font-medium">{country_Name}</td>
                    <td className="text-orange-400 font-medium">{average_cost}$</td>
                    <td className="flex gap-1 md:gap-2 lg:gap-3">
                        <div>
                            <MdEdit className="bg-[#3C393B] text-white text-[20px] md:text-[25px] lg:text-[28px] p-1 rounded-[5px]"></MdEdit>
                        </div>
                        <div>
                            <MdDelete className='bg-[#EA4744] text-white text-[20px] md:text-[25px] lg:text-[28px] p-[2px] md:p-1  rounded-[5px]'></MdDelete>
                        </div>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default MyList;