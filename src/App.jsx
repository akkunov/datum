import {Login} from "./components/auth/Login.jsx";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import Main from "./components/Main.jsx";
import {Root} from './routes/root.jsx'
import {Clinic} from "./pages/Clinics.jsx";
import {Patients} from "./pages/Patients";
import {Personal} from "./pages/Personal";
import {Reports} from "./pages/Reports";
import {Settings} from "./pages/Settings.jsx";
import {Calendar} from "./pages/Calendar";
import {BoxOffice} from "./pages/BoxOffice";
import {Accaption} from "./pages/Accaption";
import {Name} from "./pages/Name";
import {Register} from "./components/auth/register.jsx";



function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route  path={'/'} element={<Root />}>
                <Route  index path={'login'}  element={<Login/>}/>
                <Route path={'reg'} element={<Name />} />
                <Route path={'reg/me'} element={<Register/>} />
            <Route  path={'/main'} element={<Main/>}>
                <Route path={'clinic'} element={<Clinic />}/>
                <Route path={'patient'} element={<Patients />}/>
                <Route path={'personal'} element={<Personal />}/>
                <Route path={'report'} element={<Reports />}/>
                <Route path={'settings'} element={<Settings />}/>
                <Route path={'calendar'} element={<Calendar />}/>
                <Route path={'boxOffice'} element={<BoxOffice />}/>
                <Route path={'accaption'} element={<Accaption />}/>
            </Route>
        </Route>
    ))

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
