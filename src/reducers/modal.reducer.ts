import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum ModalTypes {
    loading = "loading",
    casualPlayers = "casual-players"
}

const initialState: string = "";

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModal: (_state, action: PayloadAction<ModalTypes>) => {
            return action.payload;
        }
    }
});

export const { setModal } = modalSlice.actions;
export const modalSelector = (rootState: RootState) => rootState.modal;

export default modalSlice.reducer;