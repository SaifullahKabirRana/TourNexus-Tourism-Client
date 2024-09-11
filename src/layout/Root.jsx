import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="mx-5">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;