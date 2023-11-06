import Swal from "sweetalert2";

import { useContext } from "react";
import { AuthContext } from "../Main/AuthProvider";


const AddFood = () => {

    const { user } = useContext(AuthContext);

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const pickup = form.pickup.value;
        const expired = form.expired.value;
        const additional = form.additional.value;
        const status = form.status.value;

        const newFood = { image, name, quantity, pickup, expired, additional, status };
        console.log(newFood);

        fetch("http://localhost:5000/foods", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-cyan-100 mt-16 mb-28 md:p-24 w-full">
            <h2 className="text-3xl font-extrabold text-center mb-6">Add a Food</h2>
            <form onSubmit={handleAddProduct}>
                <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Pickup Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="pickup" placeholder="Pickup Location" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Expired Date</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="expired" placeholder="Expired Date" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Additional Notes</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="additional" placeholder="Additional Notes" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Food Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="status" defaultValue='Available' placeholder="Food Status" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label mx-auto">
                            <span className="label-text font-bold text-xl">Donated By</span>
                        </label>
                        {user ?
                            <div>
                                <img className="rounded-xl mb-2 w-8 h-8 md:w-12 md:h-12 mx-auto" src={user.photoURL} alt="" />
                                <p className="text-sky-700 font-bold mb-2 text-center">{user.displayName}</p>
                                <p className="text-sky-700 font-bold mb-2 text-center">{user.email}</p>
                            </div> :
                            <div>
                            </div>
                        }
                    </div>
                </div>
                <input type="submit" value="Add Food" className="btn btn-block bg-sky-500 font-bold" />
            </form>
        </div>
    );
};

export default AddFood;