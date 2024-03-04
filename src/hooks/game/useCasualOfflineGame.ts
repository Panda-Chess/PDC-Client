import { useEffect } from "react";
import { piecesSelector } from "../../reducers/game/pieces.reducer";
import { selectablePiecesSelector, setSelectablePieces } from "../../reducers/game/selectablePieces.reducer";
import { selectedPieceSelector } from "../../reducers/game/selectedPiece.reducer";
import { useAppDispatch, useAppSelector } from "../useRedux";
import { GameStates, checkGameState, getMoves } from "@panda-chess/pdc-core";
import { setSelectableMove } from "../../reducers/game/selectableMove.reducer";

export const useCasualOfflineGame = () => {
    const dispatch = useAppDispatch();
    const pieces = useAppSelector(piecesSelector);
    const selectablePieces = useAppSelector(selectablePiecesSelector);
    const selectedPiece = useAppSelector(selectedPieceSelector);

    useEffect(() => {
        if (selectablePieces.length === 0) {
            dispatch(setSelectablePieces(pieces.filter(piece => piece.color === "white")));
        }
    }, []);

    useEffect(() => {
        if (selectablePieces.length === 0) {
            return;
        }

        const gameState = checkGameState(pieces);
        if(gameState !== GameStates.InProgress){
            alert(gameState);
            dispatch(setSelectablePieces([]));
        } else {
            dispatch(setSelectablePieces(pieces.filter(piece => piece.color !== selectablePieces[0].color)));
        }


    }, [pieces]);

    useEffect(() => {
        if(selectedPiece){
            const moves = getMoves(selectedPiece, pieces);
            dispatch(setSelectableMove(moves));
        }
    }, [selectedPiece]);
};