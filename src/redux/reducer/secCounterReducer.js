import { myInitialState } from "../initialState";

export const secCounterReducer = (state = myInitialState.secCounter, action) => {

    switch(action.type) {
        case "INC":
            return state + 1
            
            case "DEC":
                return state -1
                
    default:
        return state;
    }
}