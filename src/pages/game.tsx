import { useParams } from "react-router-dom";

export const Game = () => {
    const gameType = useParams().gameType;

    return (
        <div>
            <div>Game</div>
            <div>Game type: {gameType}</div>
        </div>
    );
};