import axios from "axios";
import settings from "../settings";

export const checkAuth = async () => {
    const token = sessionStorage.getItem("auth-token");

    if (!token) {
        return false;
    }

    const response = await axios.get(`${settings.appHost}/api/auth/check`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.status === 200;
};

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${settings.appHost}/api/auth/login`, { email: email, password: password });

    if (response.status === 200) {
        sessionStorage.setItem("auth-token", response.data.token);
    } else {
        console.log("Login failed");
    }
};

export const logout = () => {
    sessionStorage.removeItem("auth-token");
};