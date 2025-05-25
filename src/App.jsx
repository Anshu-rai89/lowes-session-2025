import  {useState, useEffect, useRef, useCallback}  from "react"
import "./App.css"
import TodoList from "./Component/Todolist";
import { useTodo } from "./hooks/useTodo";

function App() {
  const todosAPIUrl = 'https://dummyjson.com/todos?limit=3'
  const ref = useRef(null);
  const [todoInput, updateTodoInput] = useState("")
  const { loading, addTodo, updateLoading, addTodos } = useTodo();
  const name = "Anshu";

  console.log("Ref current", ref.current);
  const handleAddBtnOnClick = () => {
    addTodo(todoInput);
     updateTodoInput("");

     // accessing input element using ref
     console.log("Ref current", ref.current);
     ref?.current?.focus()
  }

  // hd88fh
  const logName = useCallback(() => {
    console.log(name);
  },[]);
  
   console.log("Loading", loading);

  const fetchTodosFromAPI = async (apiUrl) => {
    const res = await fetch(apiUrl);
    const data = await res.json();

    console.log(data);
    const todos = data.todos.map(d => d.todo);
    addTodos(todos);
    updateLoading(false);
  }

  // This gets called right after UI gets mounted on screen && 
  // by default this also gets called when component gets re render
  // Call only once on Initial UI Mount
  // the second argument in useEffect is dependency array for
  //  which the useEffect needs to be re triggered
  useEffect(()=> {
    fetchTodosFromAPI(todosAPIUrl);
  }, [])

 
  return (
    <>
      <h1>Todo APP </h1>
      <div id="input-container"> 
        <input ref={ref} value={todoInput} onChange={(event)=> {updateTodoInput(event.target.value)}}/>
        <button onClick={handleAddBtnOnClick}>Add</button>
        </div>

      {loading ? <h3>Loading your todos... </h3> : <TodoList logName={logName}/>}
    </>
  )
}

export default App
