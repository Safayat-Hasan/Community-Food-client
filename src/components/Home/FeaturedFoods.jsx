import { useEffect, useState } from "react";
import FeaturedFoodsCard from "./FeaturedFoodsCard";
import { Link } from "react-router-dom";


const FeaturedFoods = () => {

    const [foods, setFoods] = useState([]);

    const url = `https://community-food-server.vercel.app/foods`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data))

        // axiosSecure.get(url)
        //     .then(res => setBookings(res.data))

    }, [url]);

    foods.sort((a, b) => b.quantity - a.quantity);

    return (
        <div className="mb-16">
            <h2 className="text-5xl font-extrabold text-center mb-6 text-blue-700">Our Featured Foods</h2>
            <div className="mt-10 mb-10 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    foods.slice(0, 6).map(food => <FeaturedFoodsCard key={food._id} foods={food}></FeaturedFoodsCard>)
                }
            </div>
            <div className="text-center">
                <Link to='/availableFoods'><button className="btn btn-primary bg-sky-500 text-white border-0">Show All</button></Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;