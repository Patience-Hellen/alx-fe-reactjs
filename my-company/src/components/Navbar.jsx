import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    padding: "10px",
    backgroundColor: "#282c34",
    display: "flex",
    justifyContent: "center",
    gap: "20px"
    };

    const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
    };

    return (
    <nav style={navStyle}>
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/about">About</Link>
        <Link style={linkStyle} to="/services">Services</Link>
        <Link style={linkStyle} to="/contact">Contact</Link>
    </nav>
    );
}

export default Navbar;
