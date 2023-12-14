import { Piece } from "@panda-chess/pdc-core";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SelectedPieceState = {
    piece: Piece | null
};

const initialState: SelectedPieceState = {piece: null};

export const selectedPieceSlice = createSlice({
    name: "selectedPiece",
    initialState,
    reducers: {
        setSelectedPiece: (state, action: PayloadAction<Piece | null>) => {
            state.piece =  action.payload;
        }
    }
});

export const { setSelectedPiece } = selectedPieceSlice.actions;
export const selectedPieceSelector = (state: RootState) => state.game.selectedPiece.piece;

export default selectedPieceSlice.reducer;