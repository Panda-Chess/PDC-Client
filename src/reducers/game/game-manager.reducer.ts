import { Move } from "@panda-chess/pdc-core";
import { Receive } from "../receiver.reducer";
import { Sender } from "../sender.reducer";
import { Dispatch } from "@reduxjs/toolkit";
import { setCurrentColor } from "../player/currentColor.reducer";

export type GameManager = {
    initialize: (sender: Sender, receiver?: Receive) => any;
    sendMove: (move: Move) => any;
    receiveMove: (move: Move) => any;
}

export const CreateGameManager = (): GameManager => {
    let sender: Sender;
    let receive: Receive;

    const initialize = (sen: Sender, rec?: Receive) => (dispatch: Dispatch) => {
        sender = sen;

        if (rec)
            receive = rec;

        dispatch(setCurrentColor("white"));
    };

    const sendMove = (move: Move) => (dispatch: Dispatch) => {
        if (!sender)
            return;

        dispatch(sender(move));
    };

    const receiveMove = (move: Move) => (dispatch: Dispatch) => {
        if (!receive)
            return;

        dispatch(receive(move));
    };

    return {
        initialize,
        sendMove,
        receiveMove
    };
};