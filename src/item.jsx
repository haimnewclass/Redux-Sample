
import {useSelector,useDispatch} from 'react-redux';
import {increment,reset} from './reducers1';
import { useEffect } from 'react';


export const ItemSuper = (props)=>{

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

    </div>
}