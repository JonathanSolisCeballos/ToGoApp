import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'togo.auth0.com',
    clientID: '3e4cuoMN4SF5B5fAsDEVuIkTZUlPm7gI',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://togo.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile email'
  });

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult)
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
  }

  login() {
    return this.auth0.authorize();
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');  
    
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}