import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-5xl text-center font-semibold mt-16">Oops!!! The page does not exist</h2>
            <img className="mx-auto mt-10" src="https://i.ibb.co/YTf5HVL/404-page-cover.jpg" alt="" />
            <div className="text-3xl mt-6 mb-10 text-center font-semibold ">
                <Link to='/'>Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;