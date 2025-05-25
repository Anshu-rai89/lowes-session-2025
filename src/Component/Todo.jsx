import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../app/features/todoSlice";

function TodoItem(props) {
    const { index, todo } = props;
    const dispatch = useDispatch();


    const [isEditMode, setIsEditMode] = useState(false);
    const [newTodo, setNewTodo] = useState(todo);
    

    console.log("Todo re render", props);
    if (isEditMode) {
        return < div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }
        } >
            <input value={newTodo} onChange={(e)=> {setNewTodo(e.target.value)}}/>
            <button onClick={()=> {
                dispatch(updateTodo({index: index, value: newTodo}));
                setIsEditMode(false);
            }}>Save</button>
        </div>
    }

    return (
        <div className="todo-item" >
            <p>{todo}</p>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>

                <button onClick={()=> setIsEditMode(true)}>Edit</button>
                <button onClick={() => {
                    dispatch(deleteTodo(index))
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
