import { useSelector, useDispatch } from "react-redux";
import { decrementCounter, incremrntCounter } from "../redux/actionCreaters/counterAC";

function Counter () {
    const {counter} = useSelector(state => state);
    
    const dispatch = useDispatch();
    
    const handleIncrement = () => {
       return dispatch (incremrntCounter())
    };

    const handleDecrement = () => {
        return dispatch (decrementCounter())
    };
    
    return (
        <div>
            <div>COUNTER {counter}</div>
            <div data-button>
                <button onClick={handleIncrement} >INC</button>
                <button onClick={handleDecrement} >DEC</button>
            </div>
        </div>
    )
};
export {Counter};