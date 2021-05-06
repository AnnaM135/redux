import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux"
import globalState from './reducers';
import { Provider } from "react-redux"

// //STORE  // globalState

// //ACTION   // increment   //fiqsel gorcoxutyun@
//           //  decrement
//   const inc = () => {
//     return{
//       type: "plus"
//     }
//   }

//   const dec = () => {
//     return{
//       type: "minus"
//     }
//   }

// //REDUCER   // bun function

// const counter = (state = 0, action) => {
//       switch(action.type){
//           case "plus" : return state + 1
//           case "minus" : return state - 1
//           default: return state
//       }
// }




// let store = createStore(counter)

// store.subscribe(() => console.log(store.getState()))

// //DISPATCH  // store.dispatch(increment())  // action type

// store.dispatch(inc())
// store.dispatch(inc())
// store.dispatch(inc())

let store = createStore(
  globalState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
