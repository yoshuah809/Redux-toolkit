import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  increment,
  decrement,
  increaseAmount,
} from './redux/slices/counterSlices';

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state?.counter);
  console.log(counter);
  return (
    <div className='App'>
      <h1>Redux Toolkit Counter</h1>
      <h2>Counter: {counter?.value} </h2>
      <button class='button-33' onClick={() => dispatch(decrement())}>
        -
      </button>
      <button class='button-33' onClick={() => dispatch(increaseAmount(10))}>
        Increase Amount
      </button>
      <button class='button-33' onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  );
}
