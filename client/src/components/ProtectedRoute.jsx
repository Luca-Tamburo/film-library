import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"

const ProtectedRoute = () => {
    const [session] = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!session.loggedIn)
            navigate('/', { replace: true });
    }, [navigate, session]);

    if (session.loggedIn)
        return <Outlet />
}

export default ProtectedRoute;