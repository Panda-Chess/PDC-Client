import { Piece, checkGameState, getMoves } from "@panda-chess/pdc-core";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { setSelectableMove } from "./selectableMove.reducer";

type SelectedPieceState = {
    piece: Piece | null
};

const initialState: SelectedPieceState = { piece: null };

export const selectedPieceSlice = createSlice({
    name: "selectedPiece",
    initialState,
    reducers: {
        setSelectedPiece: (state, action: PayloadAction<Piece | null>) => {
            state.piece = action.payload;
        }
    }
});

export const { setSelectedPiece } = selectedPieceSlice.actions;
export const selectedPieceSelector = (state: RootState) => state.game.selectedPiece.piece;

export const selectPiece = (piece: Piece) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();

    if (checkGameState(state.game.pieces) !== "InProgress")
        return;

    if (piece.color !== state.player.currentColor)
        return;

    dispatch(setSelectedPiece(piece));

    const moves = getMoves(piece, state.game.pieces);
    dispatch(setSelectableMove(moves));
};

export default selectedPieceSlice.reducer;