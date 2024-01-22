import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { decrement, increment } from "../redux/features/counter/counterSlice";

export default function Home() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
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
