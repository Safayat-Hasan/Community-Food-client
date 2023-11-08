import { Link } from "react-router-dom";


const FoodsRow = ({ food, handleDelete }) => {

    const { _id, food_name, image, quantity, expired_date, pickup_location } = food;

    return (
        <tr>
            <th>
                <div className="flex flex-col">
                    <Link to={`/updateFood/${_id}`}><button className="btn btn-primary mb-2 bg-sky-500 text-white w-40">Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary mb-2 bg-sky-500 text-white w-40">Delete</button>
                    <Link to={`../requestedFoods/${_id}`}><button className="btn btn-primary bg-sky-500 text-white w-40">Manage</button></Link>
                </div>
            </th>
            <td className="text-lg">
                {food_name}
            </td>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {image && <img src={image} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td className="text-lg">
                {quantity}
            </td>
            <td className="text-lg">{pickup_location}</td>
            <td className="text-lg">{expired_date}</td>
        </tr>
    );
};

export default FoodsRow;