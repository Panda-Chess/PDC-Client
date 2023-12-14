import { Piece } from "@panda-chess/pdc-core";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: Piece[] = [];

export const selectablePiecesSlice = createSlice({
    name: "selectablePieces",
    initialState,
    reducers: {
        setSelectablePieces: (_state, action: PayloadAction<Piece[]>) => {
            return action.payload;
        }
    }
});

export const { setSelectablePieces } = selectablePiecesSlice.actions;
export const selectablePiecesSelector = (state: RootState) => state.game.selectablePieces;

export default selectablePiecesSlice.reducer;