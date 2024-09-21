import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
const MyList = ({ item, index, items, setItems }) => {
    const { _id, tourists_spot_name, country_Name, average_cost } = item;
    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#56b63e",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/touristSpot/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your tourist spot has been deleted.",
                                icon: "success"
                            });
                            const remaining = items.filter(i => i._id !== _id);
                            setItems(remaining);
                        }
                    })
            }
        })
    }

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
                            <MdDelete onClick={() => handleDelete(_id)} className='bg-[#EA4744] text-white text-[20px] md:text-[25px] lg:text-[28px] p-[2px] md:p-1  rounded-[5px]'></MdDelete>
                        </div>
                    </td>
                </tr>
            </tbody>
        </>
    );
};

export default MyList;