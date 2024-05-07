import { combineReducers } from "@reduxjs/toolkit";
import piecesReducer from "./pieces.reducer";
import selectedPieceReducer from "./selectedPiece.reducer";
import selectableSquaresReducer from "./selectableMove.reducer";

export const gameReducer = combineReducers({
    pieces: piecesReducer,
    selectedPiece: selectedPieceReducer,
    selectableSquare: selectableSquaresReducer
});

export default gameReducer;