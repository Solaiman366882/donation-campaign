import logo from '../../assets/img/Logo.png'
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header className='w-full bg-white'>
            <div className="container max-w-screen-xl mx-auto pt-5 pb-2 px-4">
                <div className="header-area ">
                    <div className="header-logo-area">
                        <NavLink>
                            <img className='' src={logo} alt="" />
                        </NavLink>
                    </div>
                    <nav className="header-menu-area">
                        <ul className=''>
                            <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-rose-500 underline underline-offset-8 decoration-2 font-bold" : ""
                                }
                            >Home</NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-rose-500 underline underline-offset-8 decoration-2 font-bold" : ""
                                }
                            >Donation</NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/statistic"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-rose-500 underline underline-offset-8 decoration-2 font-bold" : ""
                                }
                            >Statistics</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;