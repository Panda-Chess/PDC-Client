import { Outlet } from "react-router-dom";

export const MenuLayout = () => {
    return (
        <div>
            <h1>Menu Layout</h1>
            <Outlet />
        </div>
    );
};