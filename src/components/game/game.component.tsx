import { useEffect } from "react";

type GameProps = {
    gameMode: () => void;
};

export const Game = (props: GameProps) => {

    useEffect(() => {
        props.gameMode();
    }, []);

    return (
        <div>
            <h1>Game</h1>
        </div>
    );
};