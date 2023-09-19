import {Login} from "./components/login.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Main from "./components/main";
import {Register} from "./components/register.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route >
        <Route  path={'/login'}  element={<Login/>}/>
        <Route index path={'/'}  element={<Main/>}/>
        <Route  path={'/reg'} element={<Register />} />
    </Route>
))
function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
