import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { 
        Landing,
        HomeLayout,
        Error,
        Register,
        Login,
        About
        } from "./pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}
export default App