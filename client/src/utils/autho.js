import auth0 from 'auth0-js';
import api from '../utils/apifb';

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
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        const userData = api.get('/userinfo').then(res => alert(res));
        console.log(userData);
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
    this.auth0.authorize();
  }
}