import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../useRedux";
import { movePiece, piecesSelector } from "../../reducers/game/pieces.reducer";
import { selectedPieceSelector } from "../../reducers/game/selectedPiece.reducer";
import { Move, getMoves } from "@panda-chess/pdc-core";
import { setSelectableMove } from "../../reducers/game/selectableMove.reducer";
import { GameHookType } from "./game-hook-type";
import { useOnlineConnector } from "./utils";

export const useCasualOnlineGame: GameHookType = () => {
    const {sendMove} = useOnlineConnector("casual-game");

    const dispatch = useAppDispatch();
    const pieces = useAppSelector(piecesSelector);
    const selectedPiece = useAppSelector(selectedPieceSelector);

    useEffect(() => {
        if(selectedPiece){
            const moves = getMoves(selectedPiece, pieces);
            dispatch(setSelectableMove(moves));
        }
    }, [selectedPiece]);

    const handleMove = (move: Move) => {
        dispatch(movePiece(move));
        sendMove(move);
    };

    return {
        handleMove
    };
};