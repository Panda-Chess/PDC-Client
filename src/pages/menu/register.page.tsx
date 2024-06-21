import { User } from "@panda-chess/pdc-core";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import settings from "../../settings";

export const RegisterPage = () => {
    const [newUser, setNewUser] = useState<User>({
        email: "",
        password: "",
        name: "",
        draws: 0,
        losses: 0,
        wins: 0,
        score: 0
    });
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try{
            const response = await axios.post(`${settings.appHost}/api/auth/register`, newUser);
            sessionStorage.setItem("auth-token", response.data.token);

            navigate("/");
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={event => setNewUser({...newUser, email: event.target.value})} type="text" placeholder="Email" />
                <input onChange={event => setNewUser({...newUser, password: event.target.value})} type="password" placeholder="Password" />
                <input onChange={event => setNewUser({...newUser, name: event.target.value})} type="text" placeholder="Name" />
                <button type="submit">Register</button>
            </form>
            <Link to="/">Back</Link>
        </div>
    );
};