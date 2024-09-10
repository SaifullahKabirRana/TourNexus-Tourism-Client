import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="mx-5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Root;