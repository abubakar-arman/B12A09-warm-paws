import { NavLink, useNavigate } from 'react-router';
import logo from '../assets/logo.png'
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
    const { logout, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    const navLinks = <>
        <li key={1}>
            <NavLink to='/' >Home</NavLink>
        </li>
        {!isAuthenticated && <>
            <li key={2}>
                <NavLink to='/login'>Login</NavLink>
            </li>
            <li key={3}>
                <NavLink to='/signup'>Signup</NavLink>
            </li>
        </>}
            {isAuthenticated && <li key={4}>
                <NavLink to='/profile'>My Profile</NavLink>
            </li>}
    </>

    const handleLogout = () => {
        logout();
        navigate('/')
    }

    return (
        <div className="navbar bg-base-100 shadow-sm lg:px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl text-amber-800/80"><img className='w-20' src={logo} alt="" />Warm Paws</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 font-semibold ">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {isAuthenticated && <ul className="menu menu-horizontal px-1 gap-5 font-semibold ">
                    <li><button onClick={handleLogout} className='btn btn-ghost'>Logout</button></li>
                </ul>}
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;