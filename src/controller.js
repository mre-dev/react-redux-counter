import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './redux/actions';
import Styles from './assets/styles/Controller.module.css';

function Controller() {

    const counter = useSelector((state) => state.counterReducer);
    const customDispatch = useDispatch();

    return (
        <div className={Styles.container}>
            <p className={Styles.showCounter}>{counter}</p>
            <div className={Styles.controllerButtons}>
                <button className={Styles.incrementButtom} onClick={() => customDispatch(increment())}>+</button>
                <button className={Styles.decrementButtom} onClick={() => customDispatch(decrement())}>-</button>
            </div>
            <button className={Styles.resetButtom} onClick={() => customDispatch(reset())}>Reset</button>
        </div>
    );
}

export default Controller;
