import { useParams } from "react-router-dom";
import { GameTypes } from "../models/gameTypes";
import { Game } from "../components/game/game.component";
import { CreateGameManager } from "../reducers/game/game-manager.reducer";
import { CreateAISender, CreateCasualOfflineSender } from "../reducers/sender.reducer";
import { useAppDispatch } from "../hooks/useRedux";
import { minmaxAlgo } from "@panda-chess/pdc-ai";
import { ModalTypes, setModal } from "../reducers/modal.reducer";
import { useEffect } from "react";

export const GamePage = () => {
    const gameManager = CreateGameManager();
    const dispatch = useAppDispatch();
    const gameType = useParams().gameType;

    useEffect(() => {
        switch (gameType) {
        case GameTypes.AI:
            dispatch(gameManager.initialize(
                CreateAISender(gameManager, minmaxAlgo)
            ));
            break;
        case GameTypes.CASUAL_OFFLINE:
            dispatch(gameManager.initialize(
                CreateCasualOfflineSender()
            ));
            dispatch(setModal(ModalTypes.casualPlayers));
            break;
        case GameTypes.CASUAL_ONLINE:
            // gameTypeMove = useCasualOnlineGame();
            break;
        default:
            // gameTypeMove = useCompetitiveGame();
            break;
        }
    }, []);

    return (
        <div>
            <Game onMove={gameManager.sendMove} />
        </div>
    );
};