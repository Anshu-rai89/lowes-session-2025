import  TodoItem  from "./Todo";
import React, { memo } from "react";
import { useSelector } from "react-redux";

function TodoList(props) {
    const todos = useSelector((state) => state.todos);
    console.log("Todolist", props);


  if(todos.length == 0) {
    return <h3>Add todos in bucket..</h3>
  }

  console.log("Todo list is re rendered", props, todos);

  return (
      <>
      <h3> My Todos List</h3>
      <ul className="todo-list">
        {
           (todos || []).map((todo, index) => {
               return <TodoItem todo={todo} key={todo} index={index}/>
           }
        )
        }
      </ul>
      </>
  )
}

export default memo(TodoList)