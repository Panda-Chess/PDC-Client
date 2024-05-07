import { Box } from "@mui/material";
import { Piece, checkGameState } from "@panda-chess/pdc-core";
import { useAppDispatch } from "../../hooks/useRedux";
import { selectedPieceSelector, setSelectedPiece } from "../../reducers/game/selectedPiece.reducer";
import { useSelector } from "react-redux";
import { currentColorSelector } from "../../reducers/player/currentColor.reducer";
import { playersSelector } from "../../reducers/player/players.reducer";
import { piecesSelector } from "../../reducers/game/pieces.reducer";

type TablePieceProps = {
    piece: Piece;
};

export const TablePiece = (props: TablePieceProps) => {
    const dispatch = useAppDispatch();
    const currentColor = useSelector(currentColorSelector);
    const selectedPiece = useSelector(selectedPieceSelector);
    const players = useSelector(playersSelector);
    const pieces = useSelector(piecesSelector);

    const handlePieceSelect = () => {
        if(checkGameState(pieces) !== "InProgress")
            return;

        if(players.current?.color !== currentColor)
            return;

        if(players.current?.color !== props.piece.color)
            return;

        dispatch(setSelectedPiece(props.piece));
    };

    return(
        <Box onClick={handlePieceSelect} sx={{width: "100%", height: "100%", backgroundColor: selectedPiece?.pieceId === props.piece.pieceId? "red": ""}}>
            <img style={{width: "100%", height: "100%"}} src={`/${props.piece.color}_${props.piece.pieceType.toLocaleLowerCase()}.png`} />
        </Box>
    );
};