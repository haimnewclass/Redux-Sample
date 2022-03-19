import logo from './logo.svg';
import './App.css';

import { createStore } from "redux";
import {useSelector} from 'react-redux';


/*

//  https://github.com/reduxjs/redux-devtools/tree/main/extension
// ACTIONS
const increment=()=>{
  return{
    type:'INCREMENT'
  }
}
const decrement=()=>{
  return{
    type:'DECREMENT'
  }
}    
//Reducer
const counter = (state=0,action) =>{
  switch(action.type)
  {
    case "INCREMENT":
      return state+1;
      break;
      case "DECREMENT":
        return state-1;
        break;
    }
}

const store = createStore(counter,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{console.log(store.getState())});
*/


function App() {

  const counter = useSelector((s)=>{console.log('start');  console.log(s);});

  return (
    <div className="App">

      <div onClick={()=>{
      /*   
        store.dispatch(increment());
        console.log(store);
        if(store.getState()%4===0)
        {
          store.dispatch(decrement());
          store.dispatch(decrement());
        }
*/
        
        
      }}>
        Start{counter}
      </div>
     
    </div>
  );
}

export default App;
