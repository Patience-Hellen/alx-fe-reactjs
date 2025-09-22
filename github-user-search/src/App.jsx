// src/App.jsx
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

// Placeholder components for now
const Home = () => <h2>Welcome to GitHub User Search</h2>;
const Search = () => <h2>Search for GitHub Users</h2>;
const About = () => <h2>About this App</h2>;

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        {/* Navigation Bar */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/search" style={{ margin: "0 10px" }}>Search</Link>
          <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
