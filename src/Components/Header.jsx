
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div className="flex justify-between items-center py-5">
            <img className="w-[30%] md:w-[25%] lg:w-[18%]" src="/src/assets/Logo.png" alt="" />
            <ul className="flex gap-[9px] md:gap-7 text-[14px]  md:text-lg font-normal md:font-medium">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#ff444a] underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#ff444a] underline" : ""
                        }
                    >
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#ff444a] underline" : ""
                        }
                    >
                       Statistics
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;