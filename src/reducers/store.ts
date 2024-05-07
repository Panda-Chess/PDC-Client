import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./game/game.reducer";
import playerReducer from "./player/player.reducer";

export const store = configureStore({
    reducer: {
        game: gameReducer,
        player: playerReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;