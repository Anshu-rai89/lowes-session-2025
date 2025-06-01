import axios from "axios";
import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
const todosAPIUrl = 'https://dummyjson.com/todos'

// createAsyncThunk returns a promise
export const addTodosAPI = createAsyncThunk("addTodosAPI", async function(todo) {
    const res = await axios(todosAPIUrl + "/add", {
        method:"POST",
        data: todo
    });
    return res.data;
})

export const updateTodoAPI = createAsyncThunk("updateTodoAPI", async function (newTodo) {
    const res = await axios.put(todosAPIUrl + `/${newTodo.id}`, {
        todo: newTodo,
        completed: false,
        userId: 4
    })

return res.data.todo;
});


export const deleteTodoAPI = createAsyncThunk("deleteTodoAPI", async function (id) {
    const res = await axios.delete(todosAPIUrl + `/${id}`)
    return res.data;
})

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        loading: true ,
        error: null
    },
    reducers: {
        addTodos: function(state, action) {
            state.todos= action.payload;

        },
        updateLoading: function(state, action) {
            state.loading= action.payload
        },

        deleteTodo: function(state, action) {
            const filtredTodos = state.todos.filter((todo, index)=> index != action.payload) 
            state.todos = filtredTodos;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(addTodosAPI.fulfilled, function(state, action){
            console.log("Inside addtodo fulfil", state, action.payload);
            state.todos.push(action.payload);
        }).addCase(addTodosAPI.rejected, function(state, action) {
            console.log("Inside addtodo error", state);
            state.error = action.payload;
        }).addCase(updateTodoAPI.fulfilled, function(state, action) {
            console.log("State todos", state.todos);
             const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
             debugger
             console.log("Todo Payload", action.payload);
             if(index !== -1) state.todos[index] = action.payload;

            console.log("Todo Payload", state.todos);
            
        }).addCase(updateTodoAPI.rejected, function (state, action) {
            state.error = action.payload;
        }).
            addCase(deleteTodoAPI.fulfilled, function (state, action) {
                debugger;
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
            }).addCase(deleteTodoAPI.rejected, function (state, action) {
            state.error = action.payload;
        })
    }
})

export const {addTodos, updateLoading, deleteTodo, updateTodo, addTodo} = todoSlice.actions;
const todoReducer = todoSlice.reducer;

export default todoReducer;

