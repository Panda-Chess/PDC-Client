import { useEffect } from "react";
import { movePiece, piecesSelector } from "../../reducers/game/pieces.reducer";
import { selectedPieceSelector } from "../../reducers/game/selectedPiece.reducer";
import { useAppDispatch, useAppSelector } from "../useRedux";
import { Move, getMoves } from "@panda-chess/pdc-core";
import { setSelectableMove } from "../../reducers/game/selectableMove.reducer";
import { GameHookType } from "./game-hook-type";
import { setCurrentColor } from "../../reducers/player/currentColor.reducer";
import { playersSelector, setPlayers } from "../../reducers/player/players.reducer";

export const useCasualOfflineGame: GameHookType = () => {
    const dispatch = useAppDispatch();
    const pieces = useAppSelector(piecesSelector);
    const selectedPiece = useAppSelector(selectedPieceSelector);
    const players = useAppSelector(playersSelector);

    useEffect(() => {
        dispatch(setCurrentColor("white"));
    }, []);

    useEffect(() => {
        if (selectedPiece) {
            const moves = getMoves(selectedPiece, pieces);
            dispatch(setSelectableMove(moves));
        }
    }, [selectedPiece]);

    const handleMove = (move: Move) => {
        dispatch(movePiece(move));

        dispatch(setPlayers({
            current: players.opponent,
            opponent: players.current
        }));
    };

    return {
        handleMove
    };
};