import { useSelector, useDispatch } from "react-redux";
import { addTodo, addTodos, addTodosAPI, updateLoading } from "../app/features/todoSlice";
import { useState , useRef, useEffect} from "react";
import Todolist from "../Component/Todolist";

export function TodosPage() {
    const [todoInput, updateTodoInput] = useState(name)
     const loading = useSelector((state)=> state.loading);
      const dispatch = useDispatch();
     const todosAPIUrl = 'https://dummyjson.com/todos?limit=3'
     const ref = useRef(null);
    
      const handleAddBtnOnClick = () => {
        //dispatch(addTodo(todoInput));
        dispatch(addTodosAPI(todoInput));
         updateTodoInput("");
    
         // accessing input element using ref
         ref?.current?.focus()
      }

       const fetchTodosFromAPI = async (apiUrl) => {
          const res = await fetch(apiUrl);
          const data = await res.json();
      
          dispatch(addTodos(data.todos));
          dispatch(updateLoading(false));
        }

    useEffect(() => {
        console.log("APP Got mounted");
        fetchTodosFromAPI(todosAPIUrl);
        return () => {
            console.log("APP will unmounted")
        }
    }, [])
      
    return <>
        <h1>Todo APP </h1>
        <div id="input-container">
            <input ref={ref} value={todoInput} onChange={(event) => { updateTodoInput(event.target.value) }} />
            <button onClick={handleAddBtnOnClick}>Add</button>
        </div>

        {loading ? <h3>Loading your todos... </h3> : <Todolist/>}
    </>
}