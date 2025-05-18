import  {useState, useEffect}  from "react"
import "./App.css"
import TodoList from "./Component/Todolist";

function App() {
  const todosAPIUrl = 'https://dummyjson.com/todos?limit=3'
  const [todoInput, updateTodoInput] = useState("")
  const [todosArray, updateTodosArray] = useState([]);
  const [loading, setLoading]= useState(true);

  const handleAddBtnOnClick = () => {
    updateTodosArray([...todosArray, todoInput]);
     console.log("Updated todos array in handle on click add btn", todosArray);
     updateTodoInput("");
  }

  const handleDeleteTodo= (index) => {
     todosArray.splice(index, 1);

    updateTodosArray([...todosArray]);
     //updateTodosArray([...todosArray.slice(0,index), ...todosArray.slice(index)]);
  }


  const fetchTodosFromAPI = async (apiUrl) => {
    const res = await fetch(apiUrl);
    const data = await res.json();

    console.log(data);
    const todos = data.todos.map(d => d.todo);
    updateTodosArray(todos);
    setLoading(false);
  }

  // This gets called right after UI gets mounted on screen && 
  // by default this also gets called when component gets re render
  // Call only once on Initial UI Mount
  // the second argument in useEffect is dependency array for
  //  which the useEffect needs to be re triggered
  useEffect(()=> {
    fetchTodosFromAPI(todosAPIUrl);
  }, [])

  const updateTodo = (index, newTodoValue) => {
    const newTodosArrayCopy = [...todosArray];
    newTodosArrayCopy[index] = newTodoValue;

    updateTodosArray(newTodosArrayCopy)
  }

  console.log("todos in APP", todosArray);
  return (
    <>
      <h1>Todo APP </h1>
      <div id="input-container"> 
        <input value={todoInput} onChange={(event)=> {updateTodoInput(event.target.value)}}/>
        <button onClick={handleAddBtnOnClick}>Add</button>
        </div>

      {loading ? <h3>Loading your todos... </h3> : <TodoList todos={todosArray} handleDeleteTodo={handleDeleteTodo} updateTodo={updateTodo}/>}
    </>
  )
}

export default App
