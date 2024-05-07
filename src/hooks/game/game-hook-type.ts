import { GenericAlgorithm } from "@panda-chess/pdc-ai";
import { Move } from "@panda-chess/pdc-core";

export type AIGameProp = {
    algo: GenericAlgorithm;
}

export type ExportType = {
    handleMove: (move: Move) => void;
}

export type GameHookType = (algo?: AIGameProp) => ExportType;