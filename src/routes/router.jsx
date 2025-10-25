import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import UpdateProfile from "../pages/UpdateProfile";
import ProtectedRoute from "./ProtectedRoute";
import Spinner from "../components/Spinner";
import { Suspense } from "react";
import PasswordReset from "../pages/PasswordReset";

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        element:
          <Suspense>
            <Home />
          </Suspense>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/service/:id',
        element:
          <ProtectedRoute>
            <Suspense>
              <ServiceDetails />
            </Suspense>
          </ProtectedRoute>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/password-reset',
        Component: PasswordReset
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
        path: '/update-profile',
        element:
          <ProtectedRoute>
            <UpdateProfile />
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