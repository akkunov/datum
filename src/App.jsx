import {Login} from "./components/auth/Login.jsx";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import Main from "./components/Main.jsx";
import {Root} from './routes/root.jsx'
import {Clinics} from "./pages/Clinics.jsx";
import {Patients} from "./pages/Patients";
import {Personal} from "./pages/Personal";
import {Reports} from "./pages/Reports";
import {Settings} from "./pages/Settings.jsx";
import {Calendar} from "./pages/Calendar";
import {BoxOffice} from "./pages/BoxOffice";
import {Accaption} from "./pages/Accaption";
import {Name} from "./pages/Name";
import {Register} from "./components/auth/register.jsx";
import {SendCode} from "./pages/sendCode.jsx";
import {Department} from "./pages/Depaertment.jsx";
import {Clinic} from "./pages/Clinic.jsx";
import {Employee} from "./components/person/employee.jsx";


function App() {


        // fetch('http://localhost:8080/USER/clinic',
        //     {
        //         method: "GET", // *GET, POST, PUT, DELETE, etc.
        //         mode: "cors", // no-cors, *cors, same-origin
        //         cache: "no-cache",
        //         headers:{
        //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJha3Vub3YzMTMxMzFAZ21haWwuY29tIiwiaWF0IjoxNzAwNTY4MDA4LCJleHAiOjE3MDA2NTQ0MDh9.yoeg87gRXvZCjv1Mx-EwvlXrb1-htnc2uqH8PBml6ho'
        //         }})
        //     .then((response) => {
        //          console.log(response);
        //     })
        //

    const router = createBrowserRouter(createRoutesFromElements(
        <Route  path={'/'} element={<Root />}>
                <Route  index path={'login'}  element={<Login/>}/>
                <Route path={'reg'} element={<Register />} />
                <Route  path={'/code_send'} element={<SendCode />}/>
            <Route  path={'/'} element={<Main/>}>
                <Route path={'clinics'} element={<Clinics />} />
                <Route   path={`clinics/clinic/:clinicId`} element={<Clinic />} >
                    <Route   path={`:DepartmentId`} element={<Department />}/>
                </Route>
                <Route path={`employee`}  element={<Employee  />}/>
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
