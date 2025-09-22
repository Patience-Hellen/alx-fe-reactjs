import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [hasMore, setHasMore] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
        const { items, total_count } = await fetchUserData(username, location, minRepos, 1);
        if (items.length === 0) {
        setError("Looks like we cant find any user");
        } else {
        setUsers(items);
        setHasMore(items.length < total_count);
        }
    } catch (err) {
        setError("Something went wrong. Please try again.");
    } finally {
        setLoading(false);
    }
    };

    const handleLoadMore = async () => {
    setLoading(true);
    try {
        const nextPage = page + 1;
        const { items, total_count } = await fetchUserData(username, location, minRepos, nextPage);
        setUsers((prev) => [...prev, ...items]);
        setPage(nextPage);
        setHasMore(users.length + items.length < total_count);
    } catch (err) {
        setError("Failed to load more users.");
    } finally {
        setLoading(false);
    }
    };

    return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      {/* Search Form */}
        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
            type="text"
            placeholder="GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <input
            type="number"
            placeholder="Min Repos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem" }}>
            Search
        </button>
        </form>

      {/* Conditional Rendering */}
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}


      {/* Results */}
        <div style={{ marginTop: "1rem" }}>
        {users.map((user) => (
            <div
            key={user.id}
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "1rem",
                margin: "0.5rem auto",
                maxWidth: "500px",
                textAlign: "center",
            }}
            >
            <img
                src={user.avatar_url}
                alt={user.login}
                width="80"
                style={{ borderRadius: "50%" }}
            />
            <h3>{user.login}</h3>
            <p>ID: {user.id}</p>
            {/* Location and repos aren’t in the search API directly — they require another request */}
            <a href={user.html_url} target="_blank" rel="noreferrer">
                View Profile
            </a>
            </div>
        ))}
        </div>

      {/* Load More */}
        {hasMore && !loading && (
        <button
            onClick={handleLoadMore}
            style={{
            marginTop: "1rem",
            padding: "0.7rem 1.2rem",
            borderRadius: "5px",
            cursor: "pointer",
            }}
        >
            Load More
        </button>
        )}
    </div>
    );
};

export default Search;
