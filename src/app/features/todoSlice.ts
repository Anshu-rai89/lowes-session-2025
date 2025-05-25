
import { createSlice} from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        loading: true 
    },
    reducers: {
        addTodos: function(state, action) {
            state.todos= action.payload;
        },
        updateLoading: function(state, action) {
            state.loading= action.payload
        },

        addTodo : function(state, action) {
            state.todos.push(action.payload);
        },

        updateTodo: function(state, action) {
            const todosCopy = state.todos;
            todosCopy[action.payload.index] = action.payload.value;

            state.todos = todosCopy;
        },

        deleteTodo: function(state, action) {
            const filtredTodos = state.todos.filter((todo, index)=> index != action.payload) 
            state.todos = filtredTodos;
        }
    }
})

export const {addTodos, updateLoading, deleteTodo, updateTodo, addTodo} = todoSlice.actions;
const todoReducer = todoSlice.reducer;

export default todoReducer;

