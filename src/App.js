import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {plus} from "./actions"
import {minus} from "./actions"



function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.showReducer)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick = {() => dispatch(plus())}>+</button>
      <button onClick = {() => dispatch(minus())}>-</button>

      {
        isLogged ? <h3>dfjf</h3> : ""  
      }
    </div>
  );
}

export default App;
