import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to='/'>Activites</Link>
            <Link to='/favourites'>Favourites</Link>
        </nav>
    )
}

export default Navbar