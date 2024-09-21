import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyList from "./MyList";
import noData from '../../assets/no data.png'

const MyLists = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [user]);

    console.log(user);
    return (
        <div>
            <div className="mt-4 md:mt-6 lg:mt-8">
                <div>
                    <h2 className="text-center font-quicksand text-2xl md:text-3xl lg:text-4xl font-bold">My List</h2>
                    <div className="overflow-x-auto  md:mx-4 lg:mx-20 xl:mx-52 mt-3 md:mt-4 lg:mt-6 font-quicksand">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-[10px] md:text-sm">
                                    <th className="hidden md:flex"></th>
                                    <th>Name</th>
                                    <th>Country</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {
                                items?.map((item, index) => <MyList
                                    key={items._id}
                                    item={item}
                                    index={index}
                                    items={items}
                                    setItems={setItems}
                                ></MyList>)
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyLists;