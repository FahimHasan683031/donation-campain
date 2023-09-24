import { Outlet } from "react-router-dom";
import Header from "../Components/Header";


const Layout = () => {

    return (
        <div className="max-w-screen-xl mx-auto px-7"> 
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;