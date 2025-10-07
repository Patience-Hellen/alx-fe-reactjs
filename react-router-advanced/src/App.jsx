// src/App.jsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BlogPost from "./components/BlogPost";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ make sure this line exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        {/* ✅ Protected Route usage */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
