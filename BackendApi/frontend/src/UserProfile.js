// src/UserProfile.js
import React, { useEffect, useState } from 'react';
import { useMsal } from '@azure/msal-react';
import axios from 'axios';

function UserProfile() {
    const { accounts } = useMsal();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('/api/user/profile', {
                    headers: {
                        Authorization: `Bearer ${accounts[0].idToken}`
                    }
                });
                setProfile(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProfile();
    }, [accounts]);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Hoş Geldiniz, {profile.Name}!</h1>
            <p>Email: {profile.Email}</p>
        </div>
    );
}

export default UserProfile;
