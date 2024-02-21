import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { piecesSelector, setPieces } from "../../reducers/game/pieces.reducer";
import { TablePiece } from "./tablePiece.component";
import { selectableSquareSelector } from "../../reducers/game/selectableSquares.reducer";
import { useAppDispatch } from "../../hooks/useRedux";
import { selectedPieceSelector } from "../../reducers/game/selectedPiece.reducer";

type TableSquareProps = {
    x: number;
    y: number;
};

export const TableSquare = (props: TableSquareProps) => {
    const dispatch = useAppDispatch();

    const pieces = useSelector(piecesSelector);
    const currentPiece = pieces.find(piece => piece.position.x == props.x && piece.position.y == props.y);
    const selectedPiece = useSelector(selectedPieceSelector);
    const isSelectableSquare = !!useSelector(selectableSquareSelector).find(x=>x.x === props.x && x.y === props.y);

    const handleSquareSelect = () => {
        dispatch(setPieces(pieces.map((piece)=>{
            if(selectedPiece?.pieceId === piece.pieceId)
                return {...piece, position: {x: props.x, y: props.y}};
            
            return piece;
        })));
    };

    return (
        <Box onClick={handleSquareSelect} sx={{width: `${100/8}%`, backgroundColor: isSelectableSquare? "green": (props.x+props.y)%2 == 0? "white": "black"}}>
            {currentPiece && (
                <TablePiece piece={currentPiece}/>
            )}
        </Box>
    );
};