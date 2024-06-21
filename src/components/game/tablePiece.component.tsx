import { Box } from "@mui/material";
import { Piece } from "@panda-chess/pdc-core";
import { useAppDispatch } from "../../hooks/useRedux";
import { selectPiece, selectedPieceSelector } from "../../reducers/game/selectedPiece.reducer";
import { useSelector } from "react-redux";

type TablePieceProps = {
    piece: Piece;
};

export const TablePiece = (props: TablePieceProps) => {
    const dispatch = useAppDispatch();
    const selectedPiece = useSelector(selectedPieceSelector);

    const handlePieceSelect = () => {
        dispatch(selectPiece(props.piece));
    };

    return(
        <Box onClick={handlePieceSelect} sx={{width: "100%", height: "100%", backgroundColor: selectedPiece?.pieceId === props.piece.pieceId? "red": ""}}>
            <img style={{width: "100%", height: "100%"}} src={`/${props.piece.color}_${props.piece.pieceType.toLocaleLowerCase()}.png`} />
        </Box>
    );
};