import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Main/AuthProvider";
import RequestedFoodsRow from "./RequestedFoodsRow";


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
                                // handleDelete={handleDelete}
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