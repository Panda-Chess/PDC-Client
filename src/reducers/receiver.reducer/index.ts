import { Move } from "@panda-chess/pdc-core";
import { GameManager } from "../game/game-manager.reducer";

export type CreateReceiver = (gameManager: GameManager) => Receive;
export type Receive = (move: Move) => any;