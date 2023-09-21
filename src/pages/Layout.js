import { Outlet, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const Layout = () => {
    return (
        <>
        <Home/>
        <Contact/>
        <Outlet />
        </>
    );
}
export default Layout