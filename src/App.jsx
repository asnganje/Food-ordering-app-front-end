import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { 
        Landing,
        HomeLayout,
        Error,
        Register,
        Login
        } from "./pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/login',
    element: <Login />
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}
export default App