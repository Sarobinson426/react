import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar">
            <h1>Ninja Dojo</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create Blog</Link>
            </div>
        </div>
    );
}

export default Navbar;