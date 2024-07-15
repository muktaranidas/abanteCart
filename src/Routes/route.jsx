import { createBrowserRouter } from "react-router-dom";
import Main from "../../Pages/Main";
import Products from "../components/Products/Products";
export const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children:[
            {
                path:"/",
                element: <Products></Products>
            }

        ]
    }
])