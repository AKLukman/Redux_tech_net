import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

export default function Home() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex gap-5">
        <div>
          <button
            className="bg-green-500"
            onClick={() => dispatch(increment())}
          >
            increment
          </button>
        </div>
        <div>
          <button
            className="bg-blue-500"
            onClick={() => dispatch(incrementByValue(5))}
          >
            increment by value
          </button>
        </div>
        <div>{count}</div>
        <div>
          <button className="bg-red-500" onClick={() => dispatch(decrement())}>
            decrement
          </button>
        </div>
      </div>
    </div>
  );
}
