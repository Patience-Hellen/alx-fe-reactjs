import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/add" style={{ margin: "0 10px" }}>Add Recipe</Link>
    </nav>
    );
};

export default Navbar;
