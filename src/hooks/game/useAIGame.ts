import { useSelector } from "react-redux";
import { piecesSelector } from "../../reducers/game/pieces.reducer";
import { useEffect } from "react";
import { selectablePiecesSelector, setSelectablePieces } from "../../reducers/game/selectablePieces.reducer";
import { useAppDispatch } from "../useRedux";
import { setSelectableMove } from "../../reducers/game/selectableMove.reducer";
import { selectedPieceSelector } from "../../reducers/game/selectedPiece.reducer";
import { getMoves, checkGameState, GameStates } from "@panda-chess/pdc-core";

export const useAIGame = () => {
    const dispatch = useAppDispatch();
    const pieces = useSelector(piecesSelector);
    const selectablePieces = useSelector(selectablePiecesSelector);
    const selectedPiece = useSelector(selectedPieceSelector);

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