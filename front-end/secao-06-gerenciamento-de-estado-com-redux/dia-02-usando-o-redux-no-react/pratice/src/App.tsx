import { useDispatch, useSelector } from "react-redux";
import { actionIncrementCounter } from "./redux/actions";
import "./App.css";

type RootState = {
  reducerCount: {
    count: number
  }
}

function App() {
  const count = useSelector((state: RootState) => state.reducerCount.count);
  const dispatch = useDispatch();  
  return (
    <>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(actionIncrementCounter())}>Incrementar 1</button>
      <button onClick={() => dispatch(actionIncrementCounter(5))}>Incrementar 5</button>
      <button onClick={() => dispatch(actionIncrementCounter(-5))}>Decrementar -5</button>
      <button onClick={() => dispatch(actionIncrementCounter(-1))}>Decrementar -1</button>
    </>
  );
}

export default App;
