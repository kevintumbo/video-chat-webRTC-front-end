import {
    createBrowserRouter,
  } from 'react-router-dom'
import JoinRoom from '../pages/JoinRoom/joinRoom'
import Login from '../pages/Login/login'
import Room from '../pages/Room/room'
import ErrorPage from '../pages/Error/error-page';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/join-room",
                element: <JoinRoom/>,
                errorElement: <ErrorPage/>,
            },
            {
                path: "/login",
                element: <Login />,
                errorElement: <ErrorPage/>,
            },
            {
                path: "/room",
                element: <Room />,
                errorElement: <ErrorPage/>,
            }
        ]
    }
]);

export default router;