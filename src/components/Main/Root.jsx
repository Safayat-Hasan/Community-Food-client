import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-[1350px] mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;