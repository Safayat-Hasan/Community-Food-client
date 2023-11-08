

const RequestedFoodsRow = ({ food, handleDelete }) => {

    const { _id, food_name, donator_name, expired_date, request_date, status, donation_money, pickup_location } = food;

    return (
        <tr>
            <th>
                <div className="">
                    {status === 'available' || status === 'Available' ?
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary bg-sky-500 text-white">Cancel Request</button> :
                        null}
                </div>
            </th>
            <td className="text-lg">
                {food_name}
            </td>
            <td className="text-lg">
                {donator_name}
            </td>
            <td className="text-lg">{pickup_location}</td>
            <td className="text-lg">{expired_date}</td>
            <td className="text-lg">{request_date}</td>
            <td className="text-lg">{donation_money}</td>
            <td className="text-lg">{status}</td>
        </tr>
    );
};

export default RequestedFoodsRow;