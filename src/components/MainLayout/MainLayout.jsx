import Foote from "../Home/Footer/Foote";
import Home from "../Home/Home";
import Navbar from "../Home/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-full mx-auto">
            <Navbar></Navbar>
            <Home></Home>
            <Foote></Foote>
        </div>
    );
};

export default MainLayout;