import { Move } from "@panda-chess/pdc-core";
import { GameManager } from "../game/game-manager.reducer";
import { AppDispatch, RootState } from "../store";
import { Sender } from ".";
import { movePiece } from "../game/pieces.reducer";
import { GenericAlgorithm, getBestMove } from "@panda-chess/pdc-ai";

export const CreateAISender = (_gameManager: GameManager, algo: GenericAlgorithm): Sender => {
    return (move: Move) => (dispatch: AppDispatch, getState: () => RootState) => {
        dispatch(movePiece(move));

        const state = getState();

        const bestMove = getBestMove(state.game.pieces, "black", algo);
        dispatch(movePiece(bestMove));
    };
};