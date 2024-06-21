import { Move } from "@panda-chess/pdc-core";
import { GameManager } from "../game/game-manager.reducer";

export type CreateSender = (gameManager: GameManager) => Sender;
export type Sender = (move: Move) => any;

export { CreateCasualOfflineSender } from "./casual-offline.sender.reducer";
export { CreateAISender } from "./ai.sender.reducer";