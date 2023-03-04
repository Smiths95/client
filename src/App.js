import logo from './logo.svg';
import './App.css';
import LoginButton from "./components/login";
import LogoutButton from "./components/logout";
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "789607219909-g62v5dj4ualst16me2curvc9t96quc52.apps.googleusercontent.com";


function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
    })
  };


  gapi.load('client:auth2', start);
}); 

var accessToken = gapi.auth.getToken().access_token;

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      </div>
  );
}

export default App;
