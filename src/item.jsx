
import {useSelector,useDispatch} from 'react-redux';
import {increment,reset} from './reducers1';
import { useEffect } from 'react';
import {store} from './App'

export const ItemSuper = (props)=>{

    const incrementLocal=()=>{
        return{
          type:'INCREMENT'
        }
      }
let counter = useSelector(s=>s.reducer_counter);
const dispatchNow = useDispatch();

useEffect(()=>{
    console.log('useEffect');
    if(counter%10===0)
    {
        dispatchNow(increment());
        dispatchNow(reset());
        
    }
    

},[counter])

    return <div>*Item*

        {counter}

<div onClick={()=>{store.dispatch(incrementLocal())}}>localStore</div>
    </div>
}