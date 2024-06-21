import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import settings from "../../settings";
import { useAppDispatch } from "../../hooks/useRedux";
import { initializeConnection } from "../../Services/socket.service/socket-connection";

export const LoginPage = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const response = await axios.post(`${settings.appHost}/api/auth/login`, {email: email, password: password});

        if (response.status === 200) {
            sessionStorage.setItem("auth-token", response.data.token);

            dispatch(initializeConnection(response.data.token));

            navigate("/");
        } else {
            console.log("Login failed");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={event => setEmail(event.target.value)} type="text" placeholder="Email" />
                <input onChange={event => setPassword(event.target.value)} type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <Link to="/">Back</Link>
        </div>
    );
};