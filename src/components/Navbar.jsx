import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/favourites">Favourites</NavLink>
        </nav>
    )
}

export default Navbar;

