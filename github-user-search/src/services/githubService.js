import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Fetch GitHub users with advanced filters
 * @param {string} username - GitHub username
 * @param {string} location - User location
 * @param {string} minRepos - Minimum number of repositories
 * @param {number} page - Page number for pagination
 * @returns {object} List of users and metadata
 */
export const fetchUserData = async (username, location, minRepos, page = 1) => {
  try {
    // Build query string
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos} `;

    // Call GitHub search endpoint
    const response = await axios.get(
      `${BASE_URL}/search/users?q=${query.trim()}&page=${page}&per_page=10`
    );

    return {
      items: response.data.items,
      total_count: response.data.total_count,
    };
  } catch (error) {
    throw error;
  }
};
