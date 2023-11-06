import { useLoaderData } from "react-router-dom";
import AvailableFoodsCard from "./AvailableFoodsCard";


const AvailableFoods = () => {

    const foods = useLoaderData();

    return (
        <div className="mt-10 mb-10 grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                foods.map(food => <AvailableFoodsCard key={food._id} foods={food}></AvailableFoodsCard>)
            }
        </div>
    );
};

export default AvailableFoods;