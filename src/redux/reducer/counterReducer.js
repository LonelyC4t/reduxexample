import { myInitialState } from "../initialState";

export const counterReducer = (state = myInitialState.counter, action) => {

    switch(action.type) {
        case "INCREMENT":
            return state + 1  
    
        case "DECREMENT":
            return state - 1
               
         default:
            return state;
    }
    // switch(action.type) {
    //     case "INCREMENT":
    //          return {
    //             ...state,
    //             counter: state.counter + 1
    //         }
                
    
    //     case "DECREMENT":
    //         return counter: state.counter - 1
               
    //      default:
    //         return state;
    // }
}