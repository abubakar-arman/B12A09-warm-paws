import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
        {index: true, Component: Home},
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