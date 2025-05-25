import { createContext, useContext, useReducer } from "react";

export const TodoContext = createContext(null);

// Provider , Consumer 

// Define state and functions and pass it to UI using Provider
// Extract these data inside a component using useContext(context) given 
// that the component is wrapped inside Provider

export const useTodo = () => {
    const todoContext = useContext(TodoContext);
    if(todoContext) {
        return todoContext;
    }
    return new Error("Context is null");
}
//{ id, value, completed }
const initialTodoState = {
    todos: [],
    loading: true
}

// const action = {
//     type : "ADD_TODOS",
//     payload: todos
// }

const ADD_TODOS = "ADD_TODOS";
const UPDATE_LOADING = "UPDATE_LOADING";
const ADD_TODO = "ADD_TODO";
const UPDATE_TODO = "UPDATE_TODO"
const DELETE_TODO = "DELETE_TODO"

const todoReducer = (state = initialTodoState, action) => {
      switch(action.type) {
          case ADD_TODOS:
            return {
                ...state,
                todos: action.payload
            }
          case UPDATE_LOADING:
            return {
                ...state,
                loading: action.payload
            }
         case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:{
              const filteredTodo = state.todos.filter((data, index) => index != action.payload);
              return {
                  ...state,
                  todos: filteredTodo
              }
        }

        case UPDATE_TODO: {
            const newTodos = [...state.todos];
              if (action.payload.index < newTodos.length) {
                  newTodos[action.payload.index] = action.payload.todo;
            }
            
            return {
                ...state,
                todos: newTodos
            }
        }

        case "default":
            return state;
           
      }
}

const TodoProvider = ({children}) => {
    const [state,dispatch ] = useReducer(todoReducer, initialTodoState);

    const addTodo = (todo) => {
        dispatch({type: ADD_TODO, payload: todo})
    }
    const handleDeleteTodo = (index) => {
        dispatch({type: DELETE_TODO, payload: index})
    }

    const updateTodo = (index, newTodoValue) => {
        dispatch({type: UPDATE_TODO, payload: {index:index, todo:newTodoValue}})
    }

    const addTodos = (todos) => {
        dispatch({type: ADD_TODOS, payload: todos})
    }

    const updateLoading = (value) => {
       dispatch({type: UPDATE_LOADING, payload: value})
    }

    const value = {
        todos: state.todos,
        loading: state.loading,
        addTodos,
        updateLoading,
        deleteTodo: handleDeleteTodo,
        updateTodo,
        addTodo
    }

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    )

}

export default TodoProvider