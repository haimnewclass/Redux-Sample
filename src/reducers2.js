
// ACTIONS
const offCmd=()=>{
    return{
      type:'OFF'
    }
  }
  const onCmd=()=>{
    return{
      type:'ON'
    }
  }    
  //Reducer
  const changeSwitch = (state=0,action) =>{
    switch(action.type)
    {
      case "OFF":
        return "OFFLINE";
        break;
        case "ON":
          return "ONLINE"
          break;
      }
  }
  