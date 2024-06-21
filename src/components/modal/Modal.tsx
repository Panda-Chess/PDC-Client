import { Box, Modal as MUIModal, Typography } from "@mui/material";
import { ReactElement } from "react";

export type ModalProps = {
    isOpen: boolean;
    title?: string;

    children: ReactElement;
};

export const Modal = (props: ModalProps) => {
    return (
        <MUIModal
            sx={
                {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }
            }
            open={props.isOpen}>
            <Box sx={{
                backgroundColor: "white",
                width: "40%",
                padding: 3
            }}>
                <Typography mb={5} variant="h5">
                    {props.title}
                </Typography>
                {props.children}
            </Box>
        </MUIModal>
    );
};