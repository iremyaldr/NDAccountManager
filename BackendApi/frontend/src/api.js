// src/api.js
const apiUrl = process.env.REACT_APP_API_URL;

export const getProtectedData = async (accessToken) => {
    const response = await fetch(`${apiUrl}/protected`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    return response.json();
};
