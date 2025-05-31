import { Outlet } from "react-router"
import { Link } from "react-router"
export function DashboradPage() {
    return <div>
        <Link to="/dashboard/analtics">Analtics</Link>
        <Link to="/dashboard/transactions">Transactios</Link>
        <Outlet />
    </div>
}