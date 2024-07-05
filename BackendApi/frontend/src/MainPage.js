// src/MainPage.js
import React from 'react';
import { useMsal } from '@azure/msal-react';

function MainPage() {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginPopup().catch(e => {
            console.error(e);
        });
    };

    return (
        <div>
            <h1>Welcome to the React App</h1>
            <button onClick={handleLogin}>Login with Azure AD</button>
        </div>
    );
}

export default MainPage;
