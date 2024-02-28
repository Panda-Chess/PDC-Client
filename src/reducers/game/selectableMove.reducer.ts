import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Move } from "@panda-chess/pdc-core";

const initialState: Move[] = [];

export const selectableMove = createSlice({
    name: "selectableMove",
    initialState,
    reducers: {
        setSelectableMove: (_state, action: PayloadAction<Move[]>) => {
            return action.payload;
        }
    }
});

export const { setSelectableMove } = selectableMove.actions;
export const selectableMoveSelector = (rootState: RootState) => rootState.game.selectableSquare;

export default selectableMove.reducer;