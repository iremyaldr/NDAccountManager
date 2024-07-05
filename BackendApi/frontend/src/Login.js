import React from 'react';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider, useMsal } from '@azure/msal-react';

const pca = new PublicClientApplication({
  auth: {
    clientId: process.env.REACT_APP_AZURE_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_TENANT_ID}`,
    redirectUri: process.env.REACT_APP_AZURE_REDIRECT_URI,
  }
});

const Login = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup({
      scopes: ["user.read"]
    }).then(response => {
      console.log(response);
    }).catch(e => {
      console.error(e);
    });
  };

  return (
    <div className="login-container">
      <h2>Giriş Yap</h2>
      <button onClick={handleLogin}>Microsoft ile Giriş Yap</button>
    </div>
  );
}

const App = () => {
  return (
    <MsalProvider instance={pca}>
      <Login />
    </MsalProvider>
  );
};

export default App;
