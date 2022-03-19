
// ACTIONS
export const reset=()=>{
  return{
    type:'RESET'
  }
}
export const increment=()=>{
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
  const counter = (state=10,action) =>{
    switch(action.type)
    {
      case "RESET":
        return state=0;
        break;
        case "INCREMENT":
          return state+1;
          break;
          case "DECREMENT":
          return state-1;
          break;
        default:
          return state;
      }
  }
  
  
  export default counter;