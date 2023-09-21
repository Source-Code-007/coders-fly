import { FaSearch } from "react-icons/fa";
import logo from '/public/assets/img/logo.png'

const Navbar = () => {
    const menu = <>
        <li className="border-r border-slate-300 px-2">Home</li>
                    <li className="border-r border-slate-300 px-2">About</li>
                    <li className="border-r border-slate-300 px-2">Contact</li>
                    <li className="flex items-center gap-2 px-2">Search Plan <span className="h-8 w-8 bg-red-500 text-white rounded-full flex items-center justify-center"><FaSearch></FaSearch></span></li>
    </>
    return (
        <div className="navbar bg-slate-50 border-b border-slate-200">
            <div className="navbar-start">
                {/* For mobile */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64">
                    {menu}
                    </ul>
                </div>
                <img src={logo} className="h-12 md:h-16 w-16 md:w-20" alt="" />
            </div>

            {/* Desktop navbar center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="rounded-3xl border bg-slate-100 border-slate-300 p-2 flex items-center justify-center font-semibold">
                  {menu}
                </ul>
            </div>
            {/* navbar end */}
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1184" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;