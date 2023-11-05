import { Link, NavLink } from "react-router-dom";
import { IoFastFoodSharp } from "react-icons/io5";


const NavBar = () => {

    const navLinks = <>
        <li className="text-sky-500 font-bold"><NavLink to="/">Home</NavLink></li>
        <li className="text-sky-500 font-bold"><NavLink to="/availableFoods">Available Foods</NavLink></li>
        <li className="text-sky-500 font-bold"><NavLink to="/addFood">Add Food</NavLink></li>
        <li className="text-sky-500 font-bold"><NavLink to={`/manageMyFoods`}>Manage My Foods</NavLink></li>
        <li className="text-sky-500 font-bold"><NavLink to={`/myFoodRequest`}>My Food Request</NavLink></li>
        <li className="text-sky-500 font-bold"><NavLink to="/signUp">Sign Up</NavLink></li>
    </>

    return (
        <div className="mt-4 mb-4 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center">
                    <IoFastFoodSharp className="h-8 w-8 md:h-10 md:w-10"></IoFastFoodSharp>
                    <Link to='/' className="btn btn-ghost normal-case text-xl md:text-xl lg:text-2xl text-sky-800 font-extrabold">FoodHarmony</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* {user ?
                    <div className="md:flex md:gap-2 items-center">
                        <div>
                            <img className="rounded-full mb-2 w-8 h-8 md:w-12 md:h-12 mx-auto" src={user.photoURL} alt="" />
                            <p className="text-green-600 font-bold mb-2">{user.displayName}</p>
                        </div>
                        <a onClick={handleLogout} className="btn text-lime-700 font-bold">Sign out</a>
                    </div> :
                    <button className="btn text-lime-700 font-bold"><NavLink to="/login">Login</NavLink></button>
                } */}
                <button className="btn text-sky-700 font-bold"><NavLink to="/login">Login</NavLink></button>
            </div>
        </div>
    );
};

export default NavBar;