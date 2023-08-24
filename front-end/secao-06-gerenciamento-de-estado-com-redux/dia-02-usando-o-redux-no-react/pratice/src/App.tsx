import { useDispatch, useSelector } from "react-redux";
import { actionIncrementCounter } from "./redux/actions";
import "./App.css";

type RootState = {
  count: number
}

function App() {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(actionIncrementCounter())}>Incrementar 1</button>
      <button onClick={() => dispatch(actionIncrementCounter(5))}>Incrementar 5</button>
    </>
  );
}

export default App;
