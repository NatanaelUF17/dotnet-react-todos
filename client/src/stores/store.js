import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todosReducer from './reducers/todos.reducer';

const reducer = combineReducers({
    todos: todosReducer,
});

const store = configureStore({
    reducer: reducer 
});

export default store;