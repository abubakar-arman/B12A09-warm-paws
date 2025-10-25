import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('/data.json')
      },
      {
        path: '/service/:id',
        Component: ServiceDetails,
        loader: () => fetch('/data.json')
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/signup',
        Component: Signup
      },
      {
        path: '/profile',
        Component: Profile
      },
      {
        path: '/*',
        element: <div>Error 404</div>
      }
    ]
  },
])

export default router