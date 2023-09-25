import logo from '../../assets/img/Logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='w-full'>
            <div className="container max-w-screen-xl mx-auto pt-6 pb-2">
                <div className="header-area w-full flex justify-between items-center py-5">
                    <div className="header-logo-area">
                        <NavLink>
                            <img className=' w-48' src={logo} alt="" />
                        </NavLink>
                    </div>
                    <nav className="header-menu-area">
                        <ul className='flex gap-10'>
                            <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-rose-500 underline underline-offset-8 decoration-2" : ""
                                }
                            >Home</NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-rose-500 underline underline-offset-8 decoration-2" : ""
                                }
                            >Donation</NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/statistic"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-rose-500 underline underline-offset-8 decoration-2" : ""
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