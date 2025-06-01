import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAPI, updateTodoAPI } from "../app/features/todoSlice";
import { useNavigate, useParams } from "react-router";

function TodoItem(props) {
    const {  todo } = props;
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [isEditMode, setIsEditMode] = useState(false);
    const [newTodo, setNewTodo] = useState(todo);
    

    console.log("Todo re render", props);
    if (isEditMode) {
        return < div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }
        } >
            <input value={newTodo.todo} onChange={(e)=> {setNewTodo(e.target.value)}}/>
            <button onClick={()=> {
                dispatch(updateTodoAPI({...todo,todo: newTodo,}));
                setIsEditMode(false);
            }}>Save</button>
        </div>
    }

    return (
        <div className="todo-item" >
            <p>{todo.todo}</p>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>

                <button onClick={()=> setIsEditMode(true)}>Edit</button>
                <button onClick={() => {
                    dispatch(deleteTodoAPI(id))
                    navigate(-1);

                }}>
                    Delete
                </button>
            </div>
        </div>
    )
}


// export function TodoItem2(todo) {
//     return (
//         <div class="todo-item">
//             <p>{todo}</p>
//             <button>Delete</button>
//             <button>Edit</button>
//         </div>
//     )
//  }


export default React.memo(TodoItem);
