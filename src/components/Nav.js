import { Link } from "react-router-dom";

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none',
    };

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to="/home">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/login">
                    <li>Login</li>
                </Link>
                <Link style={navStyle} to="/login">
                    <li>Coming Soon</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
