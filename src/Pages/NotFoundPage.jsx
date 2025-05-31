import { Link, NavLink } from "react-router"
export function NotFoundPage () {
   return <>
       <h2>Page not found.. Go to Home page</h2>
       <NavLink target="_blank"  to={"/"}> Home </NavLink>
   </> 
}