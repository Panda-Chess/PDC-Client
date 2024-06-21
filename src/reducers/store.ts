import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./game";
import playerReducer from "./player/player.reducer";
import modalReducer from "./modal.reducer";

export const store = configureStore({
    reducer: {
        game: gameReducer,
        player: playerReducer,
        modal: modalReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;