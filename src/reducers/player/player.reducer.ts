import { combineReducers} from "@reduxjs/toolkit";
import players from "./players.reducer";
import currentColor from "./currentColor.reducer";

export const playerReducer = combineReducers({
    players: players,
    currentColor: currentColor
});

export default playerReducer;