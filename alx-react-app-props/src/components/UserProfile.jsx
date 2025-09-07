import { useContext } from "react";
import UserContext from "../UserContext"; // adjust the path if needed

function UserProfile() {

    const userData = useContext(UserContext);

    return (
    <div>
        <h2>Name: {userData.fullName}</h2>
        <p>Age: {userData.age}</p>
        <p>Bio: {userData.bio}</p>
    </div>
    );
}

export default UserProfile;
