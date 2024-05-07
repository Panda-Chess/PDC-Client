import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: string = "white";

export const currentColorSlice = createSlice({
    name: "currentColor",
    initialState,
    reducers: {
        setCurrentColor: (_state, action: PayloadAction<"white" | "black">) => {
            return action.payload;
        }
    }
});

export const { setCurrentColor } = currentColorSlice.actions;
export const currentColorSelector = (state: RootState) => state.player.currentColor;

export default currentColorSlice.reducer;