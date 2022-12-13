export const addTodo = (todo) => {
    return {
        type: '@todos/todoAdded',
        payload: todo
    }
}