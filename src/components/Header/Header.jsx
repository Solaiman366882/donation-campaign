import logo from '../../assets/img/Logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-area">
                    <div className="header-logo-area">
                        <NavLink>
                            <img src={logo} alt="" />
                        </NavLink>
                    </div>
                    <nav className="header-menu-area">
                        <ul>
                            <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >Home</NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >Donation</NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="/statistic"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
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