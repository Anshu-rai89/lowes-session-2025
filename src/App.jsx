import  {useState, useEffect, useRef, useCallback}  from "react"
import "./App.css"
import TodoList from "./Component/Todolist";
import {useSelector, useDispatch} from  "react-redux"
import { updateLoading , addTodos, addTodo} from "./app/features/todoSlice";
import WelcomeCard from "./Component/WelcomeCard";

function App() {
  const todosAPIUrl = 'https://dummyjson.com/todos?limit=3'
  const ref = useRef(null);
  const name = "Anshu";
  const [todoInput, updateTodoInput] = useState(name)
  const loading = useSelector((state)=> state.loading);
  const dispatch = useDispatch();
  

  const handleAddBtnOnClick = () => {
    dispatch(addTodo(todoInput));
     updateTodoInput("");

     // accessing input element using ref
     ref?.current?.focus()
  }

  // hd88fh
  const logName = useCallback(() => {
    console.log(name);
  },[]);
  

  const fetchTodosFromAPI = async (apiUrl) => {
    const res = await fetch(apiUrl);
    const data = await res.json();

    const todos = data.todos.map(d => d.todo);
    dispatch(addTodos(todos));
    dispatch(updateLoading(false));
  }

  // This gets called right after UI gets mounted on screen && 
  // by default this also gets called when component gets re render
  // Call only once on Initial UI Mount
  // the second argument in useEffect is dependency array for
  //  which the useEffect needs to be re triggered
  useEffect(()=> {
    console.log("APP Got mounted");
    fetchTodosFromAPI(todosAPIUrl);
    return () => {
      console.log("APP will unmounted")
    }
  }, [])

 
  return (
    <>
       <WelcomeCard name={todoInput}/>
      <h1>Todo APP </h1>
      <div id="input-container"> 
        <input ref={ref} value={todoInput} onChange={(event)=> {updateTodoInput(event.target.value)}}/>
        <button onClick={handleAddBtnOnClick}>Add</button>
        </div>

      {/* {loading ? <h3>Loading your todos... </h3> : <TodoList logName={logName}/>} */}
    </>
  )
}

export default App
