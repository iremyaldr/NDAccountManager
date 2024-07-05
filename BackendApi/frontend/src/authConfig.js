// src/authConfig.js
export const msalConfig = {
    auth: {
        clientId: "9f284815-0055-42d1-8fec-5aba570e5e2f",
        authority: "https://login.microsoftonline.com/3884b741-6fbc-4df8-9924-a522e881d601",
        redirectUri: "http://localhost:3000"
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
};
