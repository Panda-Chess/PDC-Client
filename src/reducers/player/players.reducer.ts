import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Player } from "@panda-chess/pdc-core";

type PlayersInGame = {
    current?: Player;
    opponent?: Player;
}

const initialState: PlayersInGame = {};

export const players = createSlice({
    name: "players",
    initialState,
    reducers: {
        setPlayers: (_state, action: PayloadAction<PlayersInGame>) => {
            return action.payload;
        }
    }
});

export const { setPlayers } = players.actions;
export const playersSelector = (rootState: RootState) => rootState.player.players;

export default players.reducer;