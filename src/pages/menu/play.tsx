import { Link } from "react-router-dom";
import { GameButton } from "../../models/gameButton";
import { GameTypes } from "../../models/gameTypes";

export const Play = () => {
    const buttons: GameButton[] = [
        { label: "Vs AI", gameType: GameTypes.AI },
        { label: "Casual Offline", gameType: GameTypes.CASUAL_OFFLINE },
        { label: "Casual Online", gameType: GameTypes.CASUAL_ONLINE },
        { label: "Competitive", gameType: GameTypes.COMPETITIVE },
    ];


    return (
        <div>
            <h1>Top Players</h1>
            {buttons.map((button, idx) => {
                return (
                    <div key={idx}>
                        <Link to={`/game/${button.gameType}`}>{button.label}</Link>
                    </div>
                );
            
            })}
            <Link to="/">Back</Link>
        </div>
    );
};