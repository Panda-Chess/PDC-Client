import { GameHookType } from "./game-hook-type";

export const useCompetitiveGame: GameHookType = () => {
    console.log("useCompetitiveGame");

    return {
        handleMove: () => {}
    };
};