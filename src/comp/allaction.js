import {createStore} from 'redux'


const Allaction = (state=[],action)=>{
    if(action.type === "add"){
        state.push(action.data)
    }
    else if (action.type === "delete"){
        state.splice(action.index,1)
    }
    return state
}


const store = createStore(Allaction);
export default store ;