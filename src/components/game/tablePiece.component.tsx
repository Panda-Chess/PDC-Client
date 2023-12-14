import { Box } from "@mui/material";
import { Piece } from "@panda-chess/pdc-core";
import { useAppDispatch } from "../../hooks/useRedux";
import { selectedPieceSelector, setSelectedPiece } from "../../reducers/game/selectedPiece.reducer";
import { useSelector } from "react-redux";
import { selectablePiecesSelector } from "../../reducers/game/selectablePieces.reducer";

type TablePieceProps = {
    piece: Piece;
};

export const TablePiece = (props: TablePieceProps) => {
    const dispatch = useAppDispatch();
    const selectedPiece = useSelector(selectedPieceSelector);
    const selectablePieces = useSelector(selectablePiecesSelector);

    const handlePieceSelect = () => {
        if(selectablePieces.find(piece => piece.pieceId === props.piece.pieceId))
            dispatch(setSelectedPiece(props.piece));
    };

    return(
        <Box onClick={handlePieceSelect} sx={{width: "100%", height: "100%", backgroundColor: selectedPiece?.pieceId === props.piece.pieceId? "red": ""}}>
            {props.piece.pieceType} {props.piece.color}
        </Box>
    );
};