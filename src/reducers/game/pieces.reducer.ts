import { Piece, generatePieceSet } from "@panda-chess/pdc-core";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

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

export const { setPieces } = piecesSlice.actions;
export const piecesSelector = (state: RootState) => state.game.pieces;

export default piecesSlice.reducer;