import { useState } from "react";

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // prevents page refresh
        if (username.trim() === "") return; // ignore empty search
        onSearch(username); // pass the username to parent (App.jsx)
        setUsername(""); // clear the input after search
    };

    return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
            type="text"
            placeholder="Enter GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "8px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px" }}>
            Search
        </button>
    </form>
    );
};

export default Search;
