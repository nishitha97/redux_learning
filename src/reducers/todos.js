export const initialState = {
    completed:true
}

const todos = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                text:action.text
            }
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
};

export default todos