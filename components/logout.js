import { GoogleLogout } from 'react-google-login';

const clientId = "789607219909-g62v5dj4ualst16me2curvc9t96quc52.apps.googleusercontent.com";

function Logout() {
    
    const onSuccess = () => {
        console.log("Log out successfull!");
    }

    return (
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
        />
        </div>
    )
}

export default Logout;