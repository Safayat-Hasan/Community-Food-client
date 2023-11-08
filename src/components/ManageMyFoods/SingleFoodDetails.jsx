import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const SingleFoodDetails = () => {

    const food = useLoaderData();
    // const { user_email, user_image, user_name, request_timeAndDate, status } = food;

    const [foods, setFoods] = useState([food]);
    // console.log(foods);
    // console.log(foods[0].user_name);

    const handleFoodConfirm = id => {
        fetch(`http://localhost:5000/requestedFoods/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'delivered' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Delivered',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    // update state
                    // const remaining = foods.filter(food => food._id !== id);
                    // const updated = foods.find(food => food._id === id);
                    // updated.status = 'delivered';
                    // const newFoods = [updated, ...remaining];
                    foods[0].status = 'delivered';
                    console.log(foods);
                    setFoods(foods);
                }
            })
    }

    return (
        <div>
            {food.length === 0 ?
                <div className="mb-40">
                    <h2 className="text-5xl text-center mb-6 text-blue-700">The Food Has Not Yet <br /> Been Requested</h2>
                </div> :
                <div>
                    <h2 className="text-5xl text-center mb-6 text-blue-700">Your Food Has Been Requested</h2>
                    <h2 className="text-3xl text-center font-bold mb-3">Requester Name: {foods[0].user_name}</h2>
                    <img className="mx-auto mb-3 w-52 h-52" src={foods[0].user_image} alt="" />
                    <h2 className="text-2xl text-center font-bold mb-3">Requester Email: {foods[0].user_email}</h2>
                    <h2 className="text-2xl text-center font-bold mb-3">Request Time and Date: {foods[0].request_timeAndDate}</h2>
                    <h2 className="text-2xl text-center font-bold mb-3">Status: {foods[0].status}</h2>
                    <div className="text-center">
                        {
                            foods[0].status === 'delivered' ? <span className="font-bold text-2xl text-blue-600 mb-3">Delivered</span> :
                                <button onClick={() => handleFoodConfirm(foods[0].food_id)} className="btn text-blue-600 font-bold mb-3">Please Confirm Delivery</button>
                        }
                    </div>
                </div>}
        </div>
    );
};

export default SingleFoodDetails;