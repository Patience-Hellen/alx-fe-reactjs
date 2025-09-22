// src/services/githubApi.js
import axios from "axios";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
    baseURL: "https://api.github.com",
    headers: {
    // If you have a token, include Authorization; otherwise omit header
    ...(GITHUB_API_KEY ? { Authorization: `token ${GITHUB_API_KEY}` } : {})
    }
});

export const searchUsers = async (query) => {
    const res = await api.get(`/search/users?q=${encodeURIComponent(query)}`);
    return res.data; // contains items array
};

export const getUserDetails = async (username) => {
    const res = await api.get(`/users/${username}`);
    return res.data;
};
