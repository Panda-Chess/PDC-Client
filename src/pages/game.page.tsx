import { useParams } from "react-router-dom";
import { GameTypes } from "../models/gameTypes";
import { Game } from "../components/game/game.component";
import { useAIGame } from "../hooks/game/useAIGame";
import { useCasualOfflineGame } from "../hooks/game/useCasualOfflineGame";
import { useCasualOnlineGame } from "../hooks/game/useCasualOnlineGame";
import { useCompetitiveGame } from "../hooks/game/useCompetitiveGame";
import { minmaxAlgo } from "@panda-chess/pdc-ai";
import { ExportType } from "../hooks/game/game-hook-type";

export const GamePage = () => {
    const gameType = useParams().gameType;
    let gameTypeMove: ExportType;

    switch (gameType) {
    case GameTypes.AI:
        gameTypeMove = useAIGame({algo: minmaxAlgo});
        break;
    case GameTypes.CASUAL_OFFLINE:
        gameTypeMove = useCasualOfflineGame();
        break;
    case GameTypes.CASUAL_ONLINE:
        gameTypeMove = useCasualOnlineGame();
        break;
    default:
        gameTypeMove = useCompetitiveGame();
        break;
    }

    return (
        <div>
            <Game onMove={gameTypeMove.handleMove} />
        </div>
    );
};