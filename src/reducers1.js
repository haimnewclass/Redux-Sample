
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
  