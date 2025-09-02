import { NavLink } from "react-router"

export const Header = () => {
    return (
    <header>
        <div>
            <NavLink to={"/"}> VishalTanStackQuery </NavLink>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/trad"}>FetchOld</NavLink>
                </li>
                <li>
                    <NavLink to={"/rq"}>FetchRQ</NavLink>
                </li>
                <li>
                    <NavLink to={"/infinite"}>Infinite Scroll</NavLink>
                </li>
            </ul>
        </div>
    </header>
    )
}