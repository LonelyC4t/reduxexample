import { DECREMENT, INCREMENT } from "../types/counterType"

export const incremrntCounter = () => {
    return {
        type: INCREMENT
    }
};

export const decrementCounter = () => {
    return {
        type: DECREMENT
    }
};