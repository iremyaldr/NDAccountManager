// src/App.js
import React from 'react';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import UserProfile from './UserProfile';

function App() {
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    const handleLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.error(e);
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                {!isAuthenticated ? (
                    <button onClick={handleLogin}>Giriş Yap</button>
                ) : (
                    <UserProfile />
                )}
            </header>
        </div>
    );
}

export default App;
