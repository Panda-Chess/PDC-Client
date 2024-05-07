import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { piecesSelector } from "../../reducers/game/pieces.reducer";
import { TablePiece } from "./tablePiece.component";
import { selectableMoveSelector } from "../../reducers/game/selectableMove.reducer";
import { Move } from "@panda-chess/pdc-core";

type TableSquareProps = {
    x: number;
    y: number;

    onMove: (move: Move) => void;
};

export const TableSquare = (props: TableSquareProps) => {
    const pieces = useSelector(piecesSelector);
    const currentPiece = pieces.find(piece => piece.position.x == props.x && piece.position.y == props.y);
    const selectableMove = useSelector(selectableMoveSelector).find(x=>
        x.to.position.x === props.x && x.to.position.y === props.y);

    const handleSquareSelect = () => {
        if(selectableMove)
            props.onMove(selectableMove);
    };

    return (
        <Box onClick={handleSquareSelect} sx={{width: `${100/8}%`, backgroundColor: selectableMove? "green": (props.x+props.y)%2 == 0? "white": "black"}}>
            {currentPiece && (
                <TablePiece piece={currentPiece}/>
            )}
        </Box>
    );
};