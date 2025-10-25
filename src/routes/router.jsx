import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import ProtectedRoute from "./ProtectedRoute";

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
        element:
          <ProtectedRoute>
            <ServiceDetails />
          </ProtectedRoute>,
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
        element:
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      },
      {
        path: '/*',
        element: <div>Error 404</div>
      }
    ]
  },
])

export default router