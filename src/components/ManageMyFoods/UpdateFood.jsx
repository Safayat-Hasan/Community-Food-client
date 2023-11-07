import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateFood = () => {

    const food = useLoaderData();

    const { _id, food_name, image, quantity, expired_date, pickup_location, additional_notes, status } = food;

    const handleUpdateFood = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const food_name = form.food_name.value;
        const pickup_location = form.pickup_location.value;
        const expired_date = form.expired_date.value;
        const additional_notes = form.additional_notes.value;
        const quantity = form.quantity.value;
        const status = form.status.value;

        const updatedFood = { image, food_name, pickup_location, expired_date, additional_notes, quantity, status };
        console.log(updatedFood);

        fetch(`http://localhost:5000/foods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-cyan-100 mt-16 mb-28 md:p-24 w-full">
            <h2 className="text-3xl font-extrabold text-center mb-6">Update {food_name}</h2>
            <form onSubmit={handleUpdateFood}>
                <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="food_name" defaultValue={food_name} placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Pickup Location</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="pickup_location" defaultValue={pickup_location} placeholder="Pickup Location" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Expired Date</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="expired_date" defaultValue={expired_date} placeholder="Expired Date" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Additional Notes</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="additional_notes" defaultValue={additional_notes} placeholder="Additional Notes" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Food Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="status" defaultValue={status} placeholder="Food Status" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Food" className="btn btn-block bg-sky-500 font-bold mt-4" />
            </form>
        </div>
    );
};

export default UpdateFood;