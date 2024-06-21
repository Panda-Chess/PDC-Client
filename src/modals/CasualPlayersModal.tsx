import { Modal } from "../components/modal/Modal";
import { CustomModalProps } from ".";
import { useSelector } from "react-redux";
import { wantsToPlaySelector } from "../reducers/player/wantsToPlay.reducer";
import { Typography } from "@mui/material";

export const CasualPlayersModal = (props: CustomModalProps) => {
    const wantsToPlay = useSelector(wantsToPlaySelector);

    return (
        <Modal isOpen={props.isOpen} title="Casual Game">
            <>
                {wantsToPlay.map((value, idx) => {
                    return (
                        <Typography key={idx}>
                            {value.user.name}
                        </Typography>
                    );
                })}
            </>
        </Modal>
    );
};