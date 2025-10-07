import { Link, Outlet } from "react-router-dom";

function Profile() {
    return (
        <div>
            <h2>User Profile</h2>
            <nav>
            <Link to="details" style={{ marginRight: "10px" }}>Profile Details</Link>
            <Link to="settings">Profile Settings</Link>
            </nav>
        <Outlet /> {/* Nested components will render here */}
        </div>
    );
}

export default Profile;
