import logo from './logo.svg';
import './App.css';

import { createStore } from "redux";
import {useSelector} from 'react-redux';






function App() {

  const counter = useSelector((s)=>{console.log('start');  console.log(s);});

  return (
    <div className="App">

      <div onClick={()=>{
         
        //store.dispatch(increment());
        console.log(counter);
        
      }}>
        Start{counter}
      </div>
     
    </div>
  );
}

export default App;
