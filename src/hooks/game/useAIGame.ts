import { useEffect } from "react";
import { piecesSelector, setPieces } from "../../reducers/game/pieces.reducer";
import { selectablePiecesSelector, setSelectablePieces } from "../../reducers/game/selectablePieces.reducer";
import { selectedPieceSelector } from "../../reducers/game/selectedPiece.reducer";
import { useAppDispatch, useAppSelector } from "../useRedux";
import { 
    GameStates, 
    checkGameState, 
    getMoves, 
    makeMove 
} from "@panda-chess/pdc-core";
import { setSelectableMove } from "../../reducers/game/selectableMove.reducer";
import { GenericAlgorithm, getBestMove } from "@panda-chess/pdc-ai";

type AIGameProp = {
    algo: GenericAlgorithm;
}

export const useAIGame = (prop: AIGameProp) => {
    const dispatch = useAppDispatch();
    const pieces = useAppSelector(piecesSelector);
    const selectablePieces = useAppSelector(selectablePiecesSelector);
    const selectedPiece = useAppSelector(selectedPieceSelector);

    useEffect(() => {
        if (selectablePieces.length === 0) {
            dispatch(setSelectablePieces(pieces.filter(piece => piece.color === "white")));
        }
    }, []);

    const aiMoves = () => {
        const bestMove = getBestMove(pieces, "black", prop.algo);
        dispatch(setPieces(makeMove(bestMove, pieces)));

        dispatch(setSelectablePieces([]));
        dispatch(setSelectableMove([]));
    };

    const playerMoves = () => {
        const currentSelectablePieces = pieces.filter(piece => piece.color === "white");
        dispatch(setSelectablePieces(currentSelectablePieces));
    };

    useEffect(() => {
        const gameState = checkGameState(pieces);
        if(gameState !== GameStates.InProgress){
            alert(gameState);
            dispatch(setSelectablePieces([]));
        } else {
            if(selectablePieces.length !== 0){
                aiMoves();
            }
            else{
                playerMoves();
            }
        }

    }, [pieces]);

    useEffect(() => {
        if(selectedPiece){
            const moves = getMoves(selectedPiece, pieces);
            dispatch(setSelectableMove(moves));
        }
    }, [selectedPiece]);
};