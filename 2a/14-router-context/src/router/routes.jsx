import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Melancias from "../pages/Melancias";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {path: "/", element: <Login />},
    {path: "/home", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/melancias", element: <Melancias />},
])

export default router;
