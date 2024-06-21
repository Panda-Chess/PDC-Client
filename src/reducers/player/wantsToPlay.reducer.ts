import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { WantsToPlay } from "@panda-chess/pdc-core/dist/utils";

const initialState: WantsToPlay[] = [];

export const wantsToPlaySlice = createSlice({
    name: "wantsToPlay",
    initialState,
    reducers: {
        setWantsToPlay: (state, action: PayloadAction<WantsToPlay[]>) => {
            return [...state, ...action.payload];
        },
        setDontWantsToPlay: (state, action: PayloadAction<WantsToPlay>) => {
            return state.filter((value) => {
                return value.user._id !== action.payload.user._id;
            });
        }
    }
});

export const { setWantsToPlay, setDontWantsToPlay } = wantsToPlaySlice.actions;
export const wantsToPlaySelector = (state: RootState) => state.player.wantsToPlay;

export default wantsToPlaySlice.reducer;