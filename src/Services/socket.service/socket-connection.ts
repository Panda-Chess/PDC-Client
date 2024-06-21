import { Socket, io } from "socket.io-client";
import { AppDispatch } from "../../reducers/store";
import settings from "../../settings";
import {
    ClientConnectedUsersEvent,
    ClientEvents,
    ClientUserConnectedEvent,
    ClientUserDisconnectedEvent,
} from "@panda-chess/pdc-core";
import { setDontWantsToPlay, setWantsToPlay } from "../../reducers/player/wantsToPlay.reducer";

let socket: Socket;

export const initializeConnection = (token: string) => (dispatch: AppDispatch) => {
    socket = io(settings.appSocket, { path: "/socket", auth: { token: token } });

    dispatch(connectedUsersHandle(socket));
    dispatch(connectionHandle(socket));
    dispatch(userConnectedHandle(socket));
    dispatch(userDisconnectedHandle(socket));
};

export const sendRequest = () => {
};

export const closeConnection = () => {
    socket.close();
};

export const connectionHandle = (socket: Socket) => () => {
    socket.on(ClientEvents.Connect, () => {
        console.log("Connected to server");
    });
};

export const connectedUsersHandle = (socket: Socket) => (dispatch: AppDispatch) => {
    const handle: ClientConnectedUsersEvent = (wantsToPlay) => {
        dispatch(setWantsToPlay(wantsToPlay));
    };

    socket.on(ClientEvents.ConnectedUsers, handle);
};

export const userConnectedHandle = (socket: Socket) => (dispatch: AppDispatch) => {
    const handle: ClientUserConnectedEvent = (wantsToPlay) => {
        dispatch(setWantsToPlay([wantsToPlay]));
    };

    socket.on(ClientEvents.UserConnected, handle);
};

export const userDisconnectedHandle = (socket: Socket) => (dispatch: AppDispatch) => {
    const handle: ClientUserDisconnectedEvent = (wantsToPlay) => {
        dispatch(setDontWantsToPlay(wantsToPlay));
    };

    socket.on(ClientEvents.UserDisconnected, handle);
};