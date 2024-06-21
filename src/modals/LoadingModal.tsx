import { Modal } from "../components/modal/Modal";
import { CustomModalProps } from ".";

export const LoadingModal = (props: CustomModalProps) => {
    return (
        <Modal isOpen={props.isOpen} title="Loading">
            <>
                123
            </>
        </Modal>
    );
};