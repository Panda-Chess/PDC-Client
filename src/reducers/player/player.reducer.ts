import { combineReducers } from "@reduxjs/toolkit";
import players from "./players.reducer";
import currentColor from "./currentColor.reducer";
import wantsToPlay from "./wantsToPlay.reducer";

export const playerReducer = combineReducers({
    players: players,
    currentColor: currentColor,
    wantsToPlay: wantsToPlay
});

export default playerReducer;