import { Link } from 'react-router-dom';

const NavBar = () => {
    const navStyle = {
        color: '#e9c7b9'
};

return (
        <nav>
            <ul className='nav-links'>
                <Link style={navStyle} to="/">
                    <li>Home page</li>
                </Link>
                <Link style={navStyle} to="About">
                    <li>About us</li>
                </Link>
            </ul>
        </nav>
     );
}
 
export default NavBar;

