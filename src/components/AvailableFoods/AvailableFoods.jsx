import { useLoaderData } from "react-router-dom";
import AvailableFoodsCard from "./AvailableFoodsCard";
import { useState } from "react";


const AvailableFoods = () => {

    const food = useLoaderData();

    const [foods, setFoods] = useState(food);
    const [sorted, setSorted] = useState(0);

    const sort = () => {
        // foods.sort((a, b) => b.quantity - a.quantity);
        // setFoods(foods);
        console.log('clicked')
        if (sorted === 0) {
            setSorted(1);
        }
        else if (sorted === 1) {
            setSorted(0);
        }
        // return foods;
    }

    const search = event => {
        event.preventDefault();
        const form = event.target;
        const food_name = form.food_name.value;

        const url = `http://localhost:5000/foods/search/${food_name}`;


        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data))


    }


    // foods.sort((a, b) => b.quantity - a.quantity);


    return (
        <div>
            <div className="text-end">
                <button className="bg-sky-500 btn text-white" onClick={(sort)}>Sort by Expired Date</button>
            </div>
            <form onSubmit={search}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Search Food</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="food_name" placeholder="Food Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Search" className="btn btn-block bg-sky-500 font-bold mt-4" />
            </form>
            {sorted === 0 ?
                <div className="mt-10 mb-10 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        foods.map(food => <AvailableFoodsCard key={food._id} foods={food}></AvailableFoodsCard>)
                    }
                </div> :
                <div className="mt-10 mb-10 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        foods.sort((a, b) => b.quantity - a.quantity).map(food => <AvailableFoodsCard key={food._id} foods={food}></AvailableFoodsCard>)
                    }
                </div>}
        </div>
    );
};

export default AvailableFoods;