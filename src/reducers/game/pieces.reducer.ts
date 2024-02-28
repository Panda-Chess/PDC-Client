import {
    Move, Piece, generatePieceSet, makeMove 
} from "@panda-chess/pdc-core";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { setSelectedPiece } from "./selectedPiece.reducer";
import { setSelectableMove } from "./selectableMove.reducer";

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
    const isSelectableSquare = state.game.selectableSquare.find(
        x=>x.to.position.x === move.to.position.x && x.to.position.y === move.to.position.y);

    if(state.game.selectedPiece && isSelectableSquare){
        const pieces = makeMove(move, state.game.pieces);

        dispatch(setPieces(pieces));

        dispatch(setSelectedPiece(null));
        dispatch(setSelectableMove([]));
    }
};


export const { setPieces } = piecesSlice.actions;
export const piecesSelector = (state: RootState) => state.game.pieces;

export default piecesSlice.reducer;