import { DEC, INC } from "../types/secCounterType"

export const incCounter = () => {
    return {
        type: INC
    }
};

export const decCounter = () => {
    return {
        type: DEC
    }
};