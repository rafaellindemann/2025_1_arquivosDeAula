import { createBrowserRouter } from "react-router-dom";
import Avisos from "../pages/Avisos";
import Contato from "../pages/Contato";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/avisos", element: <Avisos />},
    {path: "/produtos", element: <Produtos />},
])

export default router;