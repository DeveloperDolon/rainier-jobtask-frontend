import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/LoginPage/LoginPage";
import AddCourse from "../pages/AddCourse/AddCourse";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/add-course",
                element: <AddCourse></AddCourse>
            }
        ]
    },
    {
        path: "/registration",
        element: <Registration></Registration>
    },
    {
        path: "/login",
        element: <Login></Login>
    }
])

export default MainRouter;