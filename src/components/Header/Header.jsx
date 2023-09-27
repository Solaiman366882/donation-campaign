import logo from '../../assets/img/Logo.png'
import bars from '../../assets/img/icons8-menu-50.png'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className='w-full bg-white'>
            <div className="container max-w-screen-xl mx-auto pt-5 pb-2 px-4 relative">
                <div className="header-area ">
                    <div className="header-logo-area">
                        <NavLink>
                            <img className='' src={logo} alt="" />
                        </NavLink>
                    </div>
                    <nav className="header-menu-area">
                            <input type="checkbox" name="menu-check" id="menu-check" />
                            <label htmlFor="menu-check" className="bar-icon">
                                <img src={bars} alt="" />
                            </label>
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
                    {/* <div className="menu-bar">
                            <input type="checkbox" name="menu-check" id="menu-check" />
                            <label htmlFor="menu-check" className="bar-icon">
                                <img src={bars} alt="" />
                            </label>
                    </div> */}
                </div>
            </div>
        </header>
    );
};

export default Header;