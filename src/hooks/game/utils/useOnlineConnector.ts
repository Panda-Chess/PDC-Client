import { useEffect, useMemo } from "react";
import { io } from "socket.io-client";
import { useAppDispatch } from "../../useRedux";
import { setCurrentColor } from "../../../reducers/player/currentColor.reducer";
import { Move } from "@panda-chess/pdc-core";
import { movePiece, setPieces } from "../../../reducers/game/pieces.reducer";
import { setPlayers } from "../../../reducers/player/players.reducer";

type sendMove = (move: Move) => void

export const useOnlineConnector = (gameType: "casual-game" | "competitive-game") => {
    const dispatch = useAppDispatch();

    const socket = useMemo(() => io("ws://192.168.49.2/socket", { auth: { token: sessionStorage.getItem("auth-token") } }), []);

    useEffect(() => {
        socket.on("connect_error", (error) => {
            console.log(error);
        });

        socket.on("connect", () => {
            socket.emit(gameType);
        });

        socket.on("game-start", (game) => {
            dispatch(setCurrentColor("white"));
            dispatch(setPlayers({ current: game.currentPlayer, opponent: game.opponentPlayer }));
            dispatch(setPieces(game.gamePieces));
        });

        socket.on("move", (move: Move) => {
            dispatch(movePiece(move));
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMove: sendMove = (move) => {
        socket.emit("move", move);
    };

    return {
        sendMove
    };
};