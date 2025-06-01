import  TodoItem  from "./Todo";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router";

function TodoList(props) {
    const todos = useSelector((state) => state.todos);
  console.log("Todolist State", todos);
    const location = useLocation();
    const navigate = useNavigate();


  if(todos.length == 0) {
    return <h3>Add todos in bucket..</h3>
  }

  console.log("Todo list is re rendered", props, todos);

  return (
      <>
      <h3> My Todos List</h3>
      <ul className="todo-list">
        {
           (todos || []).map((todoObj, index) => {
             return <div key={todoObj.id} onClick={() => {
              console.log("In onclick")
               navigate(`/todos/${todoObj.id}`, {
                 search: "?name=Anshu",
                 state: { todo: todoObj}
               })
             }}>
               <h3 > {todoObj.todo}</h3>
              </div>
           }
        )
        }
      </ul>
      </>
  )
}

export default memo(TodoList)