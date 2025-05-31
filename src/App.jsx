import "./App.css"
import TodoList from "./Component/Todolist";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import { HomePage } from "./Pages/Home";
import { TodosPage } from "./Pages/TodosPage";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { ContactPage } from "./Pages/ContactPage";
import { TodoPage } from "./Pages/TodoPage";
import { DashboradPage } from "./Dashboard";
import { AnalticsPage } from "./AnalticsPage";
import { TransactionsPage } from "./TransactionPage";

function App() {
 

 
  // This gets called right after UI gets mounted on screen && 
  // by default this also gets called when component gets re render
  // Call only once on Initial UI Mount
  // the second argument in useEffect is dependency array for
  //  which the useEffect needs to be re triggered
 

 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        
          <Route path="/contact" element={<ContactPage email="abc@gmail.com" name="Anshu"/>} />
          <Route path="/todos/:id" element={<TodoPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/dashboard" element={<DashboradPage />} > 
            <Route index element={<AnalticsPage />} />
            <Route path="analtics" element={ <AnalticsPage />} />
            <Route path="transactions" element={<TransactionsPage />} />
          </Route>
          
          <Route path="*"  element={<NotFoundPage />}/> 
  
        </Routes>
      </Router>
       
    </>
  )
}

export default App
