import { createBrowserRouter, Outlet } from "react-router";

import RootLayout from "./components/layouts/RootLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CourseDetails from "./pages/Course";
import PrivateRoute from "./components/PrivateRoute";
import Users from "./pages/Users";

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "courses/:courseId",
        element: (
          <PrivateRoute>
            <CourseDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/*",
        element: <NotFound />,
        handle: { hideFooter: true },
      },
      {
        path: "about",
        element: <div>this is about page</div>,
      },
      {
        path: "services",
        element: <div>this is services page</div>,
      },
      {
        path: "contactUs",
        element: <div>this is contact Us page</div>,
      },
      {
        path: "users",
        element: <Users />,
        // loader: fetchUsers,
      },
    ],
  },
  // {
  //   path: "/dashboard",
  //   element: <PrivateRoute />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Users />,
  //     },
  //     {
  //       path: "products",
  //       element: <Products />,
  //     },
  //     {
  //       path: "comments",
  //       element: <Comments />,
  //     },
  //   ],
  // },
]);

export default router;
