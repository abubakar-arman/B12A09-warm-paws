import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>
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