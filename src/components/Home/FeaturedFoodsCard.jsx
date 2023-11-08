import { Link } from "react-router-dom";


const FeaturedFoodsCard = ({ foods }) => {

    const { _id, food_name, image, quantity, pickup_location, expired_date, additional_notes, donator_image, donator_name } = foods;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-96 w-96" src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title font-extrabold">Name: {food_name}</h2>
                <p className="text-xl">Quantity: <span className="font-bold">{quantity}</span></p>
                <p className="text-xl">Pickup Location: <span className="font-bold">{pickup_location}</span></p>
                <p className="text-xl">Expired Date: <span className="font-bold">{expired_date}</span></p>
                <p className="text-xl">Additional Notes: <span className="font-bold">{additional_notes}</span></p>
                <div className="mx-auto">
                    <p className="text-xl text-blue-600 font-bold">Donator: {donator_name}</p>
                    <img className="h-28 w-28 mt-2 mx-auto" src={donator_image} alt="" />
                </div>
                <div className="card-actions justify-end mt-2">
                    <Link to={`/foods/${_id}`}><button className="btn btn-primary bg-sky-500 text-white border-0">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFoodsCard;