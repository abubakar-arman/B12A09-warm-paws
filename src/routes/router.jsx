import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

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
        }
    ]
  },
  {
    path: '/services/:id',
    element: <div>Service Details</div>
  },
  {
    path: '/book-service/:id',
    element: <div>Book Service</div>
  },
  {
    path: '/profile',
    element: <div>Profile</div>
  },
  {
    path: '/login',
    element: <div>Login</div>
  },
  {
    path: '/register',
    element: <div>Register</div>
  },
  {
    path: '/*',
    element: <div>Error 404</div>
  }
])

export default router