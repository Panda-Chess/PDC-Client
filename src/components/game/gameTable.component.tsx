import { Box } from "@mui/material";
import { TableSquare } from "./tableSquare.component";

export const GameTable = () => {
    return (
        <Box 
            position="absolute" 
            width="100%"
            height="100%"
            alignItems="center" 
            top={0} 
            left={0} 
            sx={{backgroundColor: "blue"}} 
            display="flex" 
            justifyContent="center"
        >
            <Box sx={{height: window.innerHeight*0.9, width: window.innerHeight*0.9, backgroundColor: "red"}}>
                {Array(8).fill(0).map((_, i) => {
                    return (
                        <Box key={i} display="flex" sx={{width: "100%", height: `${100/8}%`}}>
                            {Array(8).fill(0).map((_, j) => {
                                return (
                                    <TableSquare key={j} x={j} y={i}/>
                                );
                            })}
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
};