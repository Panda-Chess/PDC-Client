import { useMemo } from "react";
import settings from "../settings";
import { io } from "socket.io-client";
import { ClientEvents } from "@panda-chess/pdc-core";

export const useSocket = () => {
    const socket = useMemo(() => io(settings.appSocket, { auth: { token: sessionStorage.getItem("auth-token") } }), []);

    socket.on(ClientEvents.ConnectError, (error) => {
        console.log(error);
    });


};