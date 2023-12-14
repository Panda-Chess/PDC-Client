import { combineReducers } from "@reduxjs/toolkit";
import piecesReducer from "./pieces.reducer";
import selectablePiecesReducer from "./selectablePieces.reducer";
import selectedPieceReducer from "./selectedPiece.reducer";

export const gameReducer = combineReducers({
    pieces: piecesReducer,
    selectablePieces: selectablePiecesReducer,
    selectedPiece: selectedPieceReducer
});

export default gameReducer;