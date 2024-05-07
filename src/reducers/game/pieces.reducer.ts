import {
    Move, Piece, checkGameState, generatePieceSet, makeMove 
} from "@panda-chess/pdc-core";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { setSelectedPiece } from "./selectedPiece.reducer";
import { setSelectableMove } from "./selectableMove.reducer";
import { setCurrentColor } from "../player/currentColor.reducer";

const initialState: Piece[] = generatePieceSet();

export const piecesSlice = createSlice({
    name: "pieces",
    initialState,
    reducers: {
        setPieces: (_state, action: PayloadAction<Piece[]>) => {
            return action.payload;
        }
    }
});

export const movePiece = (move: Move) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const pieces = makeMove(move, state.game.pieces);

    dispatch(setPieces(pieces));

    dispatch(setSelectedPiece(null));
    dispatch(setSelectableMove([]));
    dispatch(setCurrentColor(state.player.currentColor === "white" ? "black" : "white"));

    const gameState = checkGameState(pieces);

    if(gameState !== "InProgress"){
        alert(gameState);
    }
};


export const { setPieces } = piecesSlice.actions;
export const piecesSelector = (state: RootState) => state.game.pieces;

export default piecesSlice.reducer;