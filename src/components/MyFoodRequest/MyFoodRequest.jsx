import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Main/AuthProvider";
import RequestedFoodsRow from "./RequestedFoodsRow";
import Swal from "sweetalert2";


const MyFoodRequest = () => {

    const { user } = useContext(AuthContext);

    const [foods, setFoods] = useState([]);

    const url = `http://localhost:5000/requestedFoods/manage/${user && user.email}`;

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

                fetch(`http://localhost:5000/requestedFoods/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'The request has been cancelled from the list',
                                'success'
                            )
                            const remaining = foods.filter(food => food._id !== id);
                            setFoods(remaining);
                        }
                    })
            }
        })
    }

    // const handleFoodConfirm = id => {
    //     fetch(`https://car-doctor-server-main-ten.vercel.app/requestedFoods/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'delivered' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 // update state
    //                 const remaining = foods.filter(food => food._id !== id);
    //                 const updated = foods.find(food => food._id === id);
    //                 updated.status = 'delivered'
    //                 const newFoods = [updated, ...remaining];
    //                 setFoods(newFoods);
    //             }
    //         })
    // }

    return (
        <div>
            <h2 className="text-5xl text-center mb-6"><span className="text-blue-700">Your Requested Foods:</span> <span className="font-bold">{ foods.length }</span></h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th className="text-xl">Food Name</th>
                            <th className="text-xl">Donator Name</th>
                            <th className="text-xl">Pickup Location</th>
                            <th className="text-xl">Expired Date</th>
                            <th className="text-xl">Request Date</th>
                            <th className="text-xl">Your Donation</th>
                            <th className="text-xl">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map(food => <RequestedFoodsRow
                                key={food._id}
                                food={food}
                                handleDelete={handleDelete}
                            // handleBookingConfirm={handleBookingConfirm}
                            ></RequestedFoodsRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyFoodRequest;