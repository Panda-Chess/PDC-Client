import { Link } from "react-router-dom";

export const Main = () => {
    return (
        <div>
            <h1>Main</h1>
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/register">Register</Link>
            <br/>
            <Link to="/play">Play</Link>
            <br/>
            <Link to="/top-players">Top Players</Link>
        </div>
    );
};