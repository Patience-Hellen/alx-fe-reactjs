import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, children }) {
    if (!isAuthenticated) {
    return <Navigate to="/" replace />; // redirect to Home
    }
    return children;
}

export default ProtectedRoute;
