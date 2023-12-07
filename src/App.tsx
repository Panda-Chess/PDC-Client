import { Piece, generatePieceSet } from "@panda-chess/pdc-core";
import { useEffect, useState } from "react";

function App() {
    const [pieces, setPieces ] = useState<Piece[]>();

    useEffect(() => {
        setPieces(generatePieceSet());
    }, []);

    return (
        <>
            <p>test</p>
            {pieces && pieces.map((piece, idx) => {
                return <p key={idx}>{piece.color} {piece.pieceType} - {piece.position.x} {piece.position.y}</p>;
            })}
        </>
    );
}

export default App;
