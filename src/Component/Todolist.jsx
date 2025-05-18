import { TodoItem } from "./Todo";

function TodoList(props) {

  // Output
    //const todosComponent = [undefined , undefined]
    const { todos, handleDeleteTodo, updateTodo } = props;
    

  if(todos.length == 0) {
    return <h3>Add todos in bucket..</h3>
  }

  return (
      <>
      <h3> My Todos List</h3>
      <ul className="todo-list">
        {
           (todos || []).map((todo, index) => {
               return <TodoItem todo={todo} key={todo} index={index} handleDeleteTodo={handleDeleteTodo} updateTodo={updateTodo}/>
           }
        )
        }
      </ul>
      </>
  )
}

export default TodoList;