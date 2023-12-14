import { useParams } from "react-router-dom";
import { GameTypes } from "../models/gameTypes";
import { Game } from "../components/game/game.component";
import { useAIGame } from "../hooks/game/useAIGame";
import { useCasualOfflineGame } from "../hooks/game/useCasualOfflineGame";
import { useCasualOnlineGame } from "../hooks/game/useCasualOnlineGame";
import { useCompetitiveGame } from "../hooks/game/useCompetitiveGame";

export const GamePage = () => {
    const gameType = useParams().gameType;

    switch (gameType) {
    case GameTypes.AI:
        useAIGame();
        break;
    case GameTypes.CASUAL_OFFLINE:
        useCasualOfflineGame();
        break;
    case GameTypes.CASUAL_ONLINE:
        useCasualOnlineGame();
        break;
    case GameTypes.COMPETITIVE:
        useCompetitiveGame();
        break;
    }

    return (
        <div>
            <Game />
        </div>
    );
};