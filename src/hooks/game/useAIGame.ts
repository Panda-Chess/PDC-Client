import { useEffect } from "react";
import { movePiece, piecesSelector } from "../../reducers/game/pieces.reducer";
import { selectedPieceSelector } from "../../reducers/game/selectedPiece.reducer";
import { useAppDispatch, useAppSelector } from "../useRedux";
import { 
    Move, 
    getMoves, 
} from "@panda-chess/pdc-core";
import { setSelectableMove } from "../../reducers/game/selectableMove.reducer";
import { getBestMove, randomAlgo } from "@panda-chess/pdc-ai";
import { GameHookType } from "./game-hook-type";
import { currentColorSelector, setCurrentColor } from "../../reducers/player/currentColor.reducer";
import { setPlayers } from "../../reducers/player/players.reducer";

export const useAIGame: GameHookType = (prop = {algo: randomAlgo}) => {
    const dispatch = useAppDispatch();
    const pieces = useAppSelector(piecesSelector);
    const selectedPiece = useAppSelector(selectedPieceSelector);
    const currentColor = useAppSelector(currentColorSelector);

    useEffect(() => {
        dispatch(setCurrentColor("white"));

        dispatch(setPlayers({
            current: {color: "white", name: "Player 1"},
            opponent: {color: "black", name: "AI"}
        }));
    }, []);

    useEffect(() => {
        if(selectedPiece){
            const moves = getMoves(selectedPiece, pieces);
            dispatch(setSelectableMove(moves));
        }
    }, [selectedPiece]);

    const handleMove = (move: Move) => {
        dispatch(movePiece(move));
    };

    useEffect(() => {
        if(currentColor === "black"){
            const bestMove = getBestMove(pieces, "black", prop.algo);
            dispatch(movePiece(bestMove));
        }
    }, [pieces]);

    return {
        handleMove
    };
};