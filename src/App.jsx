import { Router, RouterProvider } from "react-router-dom"
import Products from "./components/Products/Products"
import { router } from "./Routes/route"
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
