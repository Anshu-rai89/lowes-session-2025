import { useLocation, useNavigate, useParams } from "react-router"
import Todo from "../Component/Todo"


export function TodoPage(props) {
    const location = useLocation();
    const navigate = useNavigate();
    return <>
        <button onClick={()=> {
            navigate(-1)
        }}> Go back to Todos</button>
        <Todo todo={location?.state?.todo}/>
    </>
}