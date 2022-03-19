import counter from './reducers1';
import  changeSwitch from './reducers2';
import {combineReducers}  from 'redux';

 const allReducers = combineReducers({
    reducer_counter:counter,
    reducer_switch:changeSwitch

});

export default allReducers;