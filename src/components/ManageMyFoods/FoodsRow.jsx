

const FoodsRow = ({ food }) => {

    const { _id, food_name, image, quantity, expired_date, pickup_location } = food;

    return (
        <tr>
            <th>
                <div className="flex flex-col">
                    <button className="btn btn-primary mb-2 bg-sky-500 text-white">Update</button>
                    <button className="btn btn-primary mb-2 bg-sky-500 text-white">Delete</button>
                    <button className="btn btn-primary bg-sky-500 text-white">Manage</button>
                </div>
            </th>
            <td  className="text-lg">
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