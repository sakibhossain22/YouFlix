import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaSearch } from "react-icons/fa";
import { ImEnter } from "react-icons/im";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const navLink = <>
        <NavLink to='/'>Home</NavLink>

        {
            user ? <NavLink to='/dashboard/home'>Dashboard</NavLink>
                :
                <>
                    <NavLink to='/login'>
                        <div className="flex p-2 items-center gap-1 justify-center">
                            <span className="flex-1">Sign In</span>
                            <ImEnter className="text-[#2076eb] text-xl"></ImEnter>
                        </div>
                    </NavLink>
                </>
        }
    </>
    const handleLogOut = () => {
        logOut()
        navigate("/")
    }
    return (
        <div>
            <div className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                            <div className="flex my-2 items-center relative">
                                <input type="text" className="pr-2 pl-2 bg-[#0c0c296c] py-2 rounded-md " placeholder="I'm looking for ..." />
                                <FaSearch className="absolute mr-3 cursor-pointer text-[#2076eb] right-0 "></FaSearch>
                            </div>
                        </ul>
                    </div>
                    <a className="btn font-bold btn-ghost text-2xl uppercase">You <span className="text-[#2076eb]">Flix</span></a>
                </div>
                <div className="navbar-center hidden lg:block">
                    <div className="flex items-center relative">
                        <input type="text" className="pr-6 pl-2 bg-[#0c0c296c] py-2 rounded-md " placeholder="I'm looking for ..." />
                        <FaSearch className="absolute mr-3 cursor-pointer text-[#2076eb] right-0 "></FaSearch>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex items-center justify-end">
                    <ul className="menu menu-horizontal px-1">
                        <div className="flex items-center justify-center gap-5">
                            {navLink}
                            {
                                user && <button onClick={() => handleLogOut()} className="bg-[#a4850a] px-6 py-2 rounded text-white">Log Out</button>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;