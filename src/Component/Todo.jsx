import { useState } from "react";

export function TodoItem(props) {
    const { handleDeleteTodo, index, todo, updateTodo } = props;

    const [isEditMode, setIsEditMode] = useState(false);
    const [newTodo, setNewTodo] = useState(todo);
    

    console.log("isEdit mode", isEditMode);
    if (isEditMode) {
        return < div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }
        } >
            <input value={newTodo} onChange={(e)=> {setNewTodo(e.target.value)}}/>
            <button onClick={()=> {
                updateTodo(index, newTodo);
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
                    handleDeleteTodo(index)
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

