import { NavLink } from "react-router-dom";


const LogIn = () => {

    const handleLogIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }

    return (
        <div className="mt-16 mb-28 mx-auto">
            <div className="hero min-h-screen bg-cyan-100">
                <div className="hero-content flex-col lg:flex-row-reverse md:gap-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Login now and donate your food to the needy one for a better world</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-sky-500 text-white">Login</button>
                            </div>
                            {/* {logError &&
                                <p className="text-red-700">{logError}</p>
                            } */}
                            <div className="flex items-center">
                                {/* <AiFillGoogleCircle className="text-xl"></AiFillGoogleCircle> */}
                                {/* <p><button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p> */}
                            </div>
                            <p>New here? <NavLink className="text-sky-500 font-bold" to='/signUp'>Sign Up</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
            {/* <ToastContainer
                position="top-center"
                autoClose={5000}
            /> */}
        </div>
    );
};

export default LogIn;