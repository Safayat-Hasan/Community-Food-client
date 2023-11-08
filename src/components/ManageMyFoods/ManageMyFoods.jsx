import FoodsRow from "./FoodsRow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Main/AuthProvider";
import Swal from "sweetalert2";



const ManageMyFoods = () => {

    const { user } = useContext(AuthContext);

    const [foods, setFoods] = useState([]);

    const url = `https://community-food-server.vercel.app/foods/manage/${user && user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data))

        // axiosSecure.get(url)
        //     .then(res => setBookings(res.data))

    }, [url]);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://community-food-server.vercel.app/foods/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'The Food has been deleted from the list',
                                'success'
                            )
                            const remaining = foods.filter(food => food._id !== id);
                            setFoods(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>
            <h2 className="text-5xl text-center mb-6"><span className="text-blue-700">Your Added Foods:</span> <span className="font-bold">{foods.length}</span></h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th className="text-xl">Food Name</th>
                            <th className="text-xl">Image</th>
                            <th className="text-xl">Quantity</th>
                            <th className="text-xl">Pickup Location</th>
                            <th className="text-xl">Expired Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map(food => <FoodsRow
                                key={food._id}
                                food={food}
                                handleDelete={handleDelete}
                            // handleBookingConfirm={handleBookingConfirm}
                            ></FoodsRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageMyFoods;