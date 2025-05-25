import { createContext, useContext, useState } from "react";

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

const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }
    const handleDeleteTodo = (index) => {
        todos.splice(index, 1);

        setTodos([...todos]);
    }

    const updateTodo = (index, newTodoValue) => {
        const newTodosArrayCopy = [...todos];
        newTodosArrayCopy[index] = newTodoValue;

        setTodos(newTodosArrayCopy)
    }

    const addTodos = (todos) => {
        setTodos(todos);
    }

    const updateLoading = (value) => {
        setLoading(value);
    }

    const value = {
        todos,
        loading,
        deleteTodo: handleDeleteTodo,
        updateTodo,
        addTodo,
        addTodos,
        updateLoading
    }

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    )

}

export default TodoProvider