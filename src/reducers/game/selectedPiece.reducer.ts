import { Piece } from "@panda-chess/pdc-core";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: any = null;

export const selectedPieceSlice = createSlice({
    name: "selectedPiece",
    initialState,
    reducers: {
        setSelectedPiece: (_state: Piece | null, action: PayloadAction<Piece | null>): Piece | null => {
            return action.payload;
        }
    }
});

export const { setSelectedPiece } = selectedPieceSlice.actions;
export const selectedPieceSelector = (state: RootState): Piece => state.game.selectedPiece;

export default selectedPieceSlice.reducer;