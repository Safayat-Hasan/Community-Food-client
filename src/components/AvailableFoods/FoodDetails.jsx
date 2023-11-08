import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Main/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";


const FoodDetails = () => {

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const [currentMsg, setCurrentMsg] = useState('');


    const handleRequestFood = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const food_name = form.food_name.value;
        const food_id = form.food_id.value;
        const pickup_location = form.pickup_location.value;
        const expired_date = form.expired_date.value;
        const additional_notes = form.additional_notes.value;
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;
        const user_image = form.user_image.value;
        const request_timeAndDate = form.request_timeAndDate.value;
        const donation_money = form.donation_money.value;
        const donator_name = form.donator_name.value;
        const donator_email = form.donator_email.value;
        const status = form.status.value;

        const requestedFood = { image, food_name, food_id, pickup_location, expired_date, additional_notes, user_email, user_name, user_image, request_timeAndDate, donator_name, donator_email, donation_money, status };
        console.log(requestedFood);


        fetch("http://localhost:5000/requestedFoods", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestedFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setCurrentMsg('The Food has been requested successfully');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Requested',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    const { user } = useContext(AuthContext)

    const foodDetails = useLoaderData();
    const { _id, food_name, image, quantity, donator_name, pickup_location, expired_date, donator_email, status } = foodDetails;

    return (
        <div>
            <div className="">
                <h2 className="text-center text-4xl mb-4 font-extrabold">Donor Information</h2>
                <h3 className="text-center text-2xl mb-4">Donor Name: <span className="text-blue-700 font-bold">{donator_name}</span></h3>
                <h3 className="text-center text-2xl mb-4">Pickup Location: <span className="text-blue-700 font-bold">{pickup_location}</span></h3>
            </div>
            <div className="mt-10 mb-28">
                <h2 className="mb-10 text-center text-7xl text-sky-700 font-bold">{food_name}</h2>
                <img className="w-[1100px] h-[600px] mx-auto" src={image} alt="" />
                {/* <p className="mt-10 text-2xl md:text-3xl font-bold">{detail.big_description}</p> */}
                <p className="mt-10 text-sky-500 text-2xl md:text-3xl font-extrabold text-center">Quantity: {quantity}</p>
                <div className="flex justify-center gap-10">
                    <p className="mt-10 text-sky-700 text-2xl md:text-3xl font-bold border-4 p-4">Expired Date: {expired_date}</p>
                </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <div className="items-center mt-10 text-center">
                    <button className="btn text-2xl bg-sky-500 text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Request</button>
                </div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        {/* <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p> */}
                        <form method="dialog" onSubmit={handleRequestFood}>
                            {/* if there is a button in form, it will close the modal */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input type="text" name="food_name" readOnly defaultValue={food_name} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Image</span>
                                </label>
                                <input type="text" name="image" readOnly defaultValue={image} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Id</span>
                                </label>
                                <input type="text" name="food_id" readOnly defaultValue={_id} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Donator Email</span>
                                </label>
                                <input type="text" name="donator_email" readOnly defaultValue={donator_email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Food Donator Name</span>
                                </label>
                                <input type="text" name="donator_name" readOnly defaultValue={donator_name} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="text" name="user_email" readOnly defaultValue={user ? user.email : null} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name="user_name" readOnly defaultValue={user ? user.displayName : null} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Image</span>
                                </label>
                                <input type="text" name="user_image" readOnly defaultValue={user ? user.photoURL : null} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Request time and date</span>
                                </label>
                                <input type="text" name="request_timeAndDate" readOnly defaultValue={`${currentTime},${currentDate}`} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Pickup Location</span>
                                </label>
                                <input type="text" name="pickup_location" readOnly defaultValue={pickup_location} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Expired Date</span>
                                </label>
                                <input type="text" name="expired_date" readOnly defaultValue={expired_date} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Additional Notes</span>
                                </label>
                                <input type="text" name="additional_notes" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Donation Money</span>
                                </label>
                                <input type="text" name="donation_money" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Status</span>
                                </label>
                                <input type="text" name="status" readOnly defaultValue={status} className="input input-bordered" />
                            </div>
                            {/* <input className="btn bg-sky-500 text-white mt-4" type="submit" value="Request" /> */}
                            <button className="btn bg-sky-500 text-white mt-4 ml-4">Request</button>
                            <p className="pt-4">Press ESC key to close</p>
                            <p className="text-green-700 font-bold text-xl pt-2">{currentMsg}</p>
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default FoodDetails;