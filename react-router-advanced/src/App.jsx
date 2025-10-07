// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
