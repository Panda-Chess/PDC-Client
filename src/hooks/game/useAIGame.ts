import { useSelector } from "react-redux";
import { piecesSelector } from "../../reducers/game/pieces.reducer";
import { useEffect } from "react";
import { selectablePiecesSelector, setSelectablePieces } from "../../reducers/game/selectablePieces.reducer";
import { useAppDispatch } from "../useRedux";

export const useAIGame = () => {
    const dispatch = useAppDispatch();
    const pieces = useSelector(piecesSelector);
    const selectablePieces = useSelector(selectablePiecesSelector);

    useEffect(() => {
        if (selectablePieces.length === 0) {
            dispatch(setSelectablePieces(pieces.filter(piece => piece.color === "white")));
        }
    }, []);

    useEffect(() => {
        if (selectablePieces.length === 0) {
            return;
        }

        dispatch(setSelectablePieces(pieces.filter(piece => piece.color !== selectablePieces[0].color)));
    }, [pieces]);
};