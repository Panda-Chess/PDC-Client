import { Move } from "@panda-chess/pdc-core";
import { AppDispatch } from "../store";
import { Sender } from ".";
import { movePiece } from "../game/pieces.reducer";

export const CreateCasualOfflineSender = (): Sender => {
    return (move: Move) => (dispatch: AppDispatch) => {
        dispatch(movePiece(move));
    };
};