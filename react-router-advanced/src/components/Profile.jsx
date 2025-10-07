import { Link, Route, Routes } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
    return (
        <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

        <nav className="flex space-x-4 mb-4">
        <Link to="details" className="text-blue-600 hover:underline">
            Profile Details
        </Link>
        <Link to="settings" className="text-blue-600 hover:underline">
            Profile Settings
        </Link>
        </nav>

        <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
        </Routes>
    </div>
    );
}

export default Profile;
