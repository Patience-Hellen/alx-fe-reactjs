import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [user, setUser] = useState(null); // placeholder for GitHub user data

  const handleSearch = (username) => {
    console.log("Searching for:", username);
    // Later we’ll fetch GitHub API data and update `setUser`
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>GitHub User Search</h1>

      {/* Search input */}
      <Search onSearch={handleSearch} />

      {/* Placeholder for results */}
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      ) : (
        <p>Enter a username to search.</p>
      )}
    </div>
  );
}

export default App;
