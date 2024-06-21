import { useAppSelector } from "../hooks/useRedux";
import { ModalTypes, modalSelector } from "../reducers/modal.reducer";
import { CasualPlayersModal } from "./CasualPlayersModal";
import { LoadingModal } from "./LoadingModal";

export type CustomModalProps = {
    isOpen: boolean;
}

export const Modals = () => {
    const modalMap: { [key: string]: (props: CustomModalProps) => JSX.Element } = {
        [ModalTypes.loading]: LoadingModal,
        [ModalTypes.casualPlayers]: CasualPlayersModal
    };
    const modal = useAppSelector(modalSelector);

    return (
        <>
            {Object.keys(modalMap).map((key, idx) => {
                const ModalComponent = modalMap[key];
                return <ModalComponent key={idx} isOpen={modal === key} />;
            })}
        </>
    );
};