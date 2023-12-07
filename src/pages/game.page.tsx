import { useParams } from "react-router-dom";
import { GameTypes } from "../models/gameTypes";
import { Game } from "../components/game/game.component";
import { useAIGame } from "../hooks/game/useAIGame";

export const GamePage = () => {
    const gameType = useParams().gameType;

    return (
        <div>
            {gameType === GameTypes.AI && <Game gameMode={useAIGame}/>}
            {gameType === GameTypes.CASUAL_OFFLINE && <Game gameMode={useAIGame}/>}
            {gameType === GameTypes.CASUAL_ONLINE && <Game gameMode={useAIGame}/>}
            {gameType === GameTypes.COMPETITIVE && <Game gameMode={useAIGame}/>}
        </div>
    );
};