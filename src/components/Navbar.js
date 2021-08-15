import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>ACTIVITIES</Link>
                </li>
                <li>
                    <Link to='/favourites'>FAVOURITES</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar