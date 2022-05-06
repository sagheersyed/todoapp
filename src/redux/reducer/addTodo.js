const initialState = {todo : []}
export const addTodo = (state = initialState , action)=> {
    console.log("###############")
    console.log(state.todo)
    console.log("###############")
    switch(action.type){
        case 'ADD_TODO' : 
        return {
            ...state ,
            todo : [...state.todo , action.payload]
        }
        default : return state;
    }
}