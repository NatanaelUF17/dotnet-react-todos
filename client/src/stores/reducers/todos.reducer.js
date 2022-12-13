const initialState = {
    todos: []
}

function todosReducer(state = initialState, action) {
    switch (action.type) {
        case '@todos/todoAdded':
            // TODO: Implement how we are gonna perform the add todo
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state;
    }
}

export default todosReducer;