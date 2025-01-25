const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const clickButton = async (username) => {
    const response = await fetch(`${API_BASE_URL}/api/game/click`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
    });
    return response.json();
};

export const getUserData = async (username) => {
    const response = await fetch(`${API_BASE_URL}/api/user/${username}`);
    return response.json();
};