import { useSelector, useDispatch } from "react-redux"
import { decCounter, incCounter } from "../redux/actionCreaters/secCounterAC";

function SecCounter () {
    const {secCounter} = useSelector(state => state);
    const dispatch = useDispatch()

    const handlInc =() => {
        return dispatch(incCounter())
    };
    
    const handlDec =() => {
        return dispatch(decCounter())
    };

    return (
        <div>
            <div>SECCOUNTER {secCounter}</div>
            <div data-button>
                <button onClick={handlInc} >INC</button>
                <button onClick={handlDec} >DEC</button>
            </div>
    </div>
    )
};
export {SecCounter}