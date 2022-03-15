import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmaount } from './counterState';
const CounterApp = () => {
  //Destructure
  const { count } = useSelector((state) => state.counter);
  //const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h2>CounterApp</h2>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmaount(5))}>
        Increment by 5
      </button>
    </div>
  );
};

export default CounterApp;
