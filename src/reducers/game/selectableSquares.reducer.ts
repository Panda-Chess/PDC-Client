import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Position } from "@panda-chess/pdc-core";

const initialState: Position[] = [];

export const selectableSquare = createSlice({
    name: "selectableSquare",
    initialState,
    reducers: {
        setSelectableSquare: (_state, action: PayloadAction<Position[]>) => {
            return action.payload;
        }
    }
});

export const { setSelectableSquare } = selectableSquare.actions;
export const selectableSquareSelector = (rootState: RootState) => rootState.game.selectableSquare;

export default selectableSquare.reducer;