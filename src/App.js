import logo from './logo.svg';
import './App.css';

import { createStore } from "redux";
import {useSelector} from 'react-redux';





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

const store = createStore(counter);

store.subscribe(()=>{console.log(store.getState())});



function App() {

  const counter = useSelector((s)=>{console.log('start');  console.log(s);});

  return (
    <div className="App">

      <div onClick={()=>{
         
        store.dispatch(increment());
        console.log(store);
        if(store.getState()%4===0)
        {
          store.dispatch(decrement());
          store.dispatch(decrement());
        }
        
      }}>
        Start{counter}
      </div>
     
    </div>
  );
}

export default App;
