import { Link } from "react-router-dom";
import { checkAuth, logout } from "../../Services/auth.service";
import { useEffect, useState } from "react";
import { closeConnection } from "../../Services/socket.service/socket-connection";

export const MainPage = () => {
    const [authState, setAuthState] = useState(false);

    useEffect(() => {
        checkAuth().then((auth) => {
            setAuthState(auth);
        });
    }, []);

    const handleLogout = () => {
        logout();
        closeConnection();
        setAuthState(false);
    };

    return (
        <div>
            <h1>Main</h1>
            {authState ? <button onClick={handleLogout}>Logout</button> : <Link to="/login">Login</Link>}
            <br />
            <Link to="/register">Register</Link>
            <br />
            <Link to="/play">Play</Link>
            <br />
            <Link to="/top-players">Top Players</Link>
        </div>
    );
};