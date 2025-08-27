import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <div className="py-4 px-10 flex justify-between">
            <h1 className="text-2xl">VishalFlix</h1>
            <div>
                <ul className="flex gap-4">
                    <li className={`cursor-pointer text-lg `}>
                        <NavLink to={"/"} style={({ isActive }) => {
                            return {
                                color: isActive?"red":"black"
                            }
                        }}> 
                            Home
                        </NavLink>
                    </li>
                    <li className={`cursor-pointer text-lg `}>
                        <NavLink to={"/movie"} style={({ isActive }) => {
                            return {
                                color: isActive?"red":"black"
                            }
                        }}>
                            Movies
                        </NavLink>
                    </li>
                    <li className={`cursor-pointer text-lg `}>
                        <NavLink to={"about"} style={({ isActive }) => {
                            return {
                                color: isActive?"red":"black"
                            }
                        }}>
                            About
                        </NavLink>
                    </li>
                    <li className={`cursor-pointer text-lg `}>
                        <NavLink to={"contact"} style={({ isActive }) => {
                            return {
                                color: isActive?"red":"black"
                            }
                        }}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}