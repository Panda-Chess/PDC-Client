import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { piecesSelector } from "../../reducers/game/pieces.reducer";
import { TablePiece } from "./tablePiece.component";

type TableSquareProps = {
    x: number;
    y: number;
};

export const TableSquare = (props: TableSquareProps) => {
    const pieces = useSelector(piecesSelector);
    const currentPiece = pieces.find(piece => piece.position.x == props.x && piece.position.y == props.y);

    return (
        <Box sx={{width: `${100/8}%`, backgroundColor: (props.x+props.y)%2 == 0? "white": "black"}}>
            {currentPiece && (
                <TablePiece piece={currentPiece}/>
            )}
        </Box>
    );
};