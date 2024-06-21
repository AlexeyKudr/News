import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";
import SignUpPage from "./components/pages/SignUpPage";
import SignInPage from "./components/pages/SignInPage";
import axiosInstance from "./components/api/axiosInstance";
import { setAccessToken } from "./components/api/axiosInstance";
import NewsPage from "./components/pages/NewsPage";
import Account from "./components/pages/Account";
import ProtectedRouter from "./components/HOCs/ProtectedRouter";
import ErrorPage from "./components/pages/ErrorPage";

function App() {
  const [user, setUser] = useState({ status: "guest", data: null });
  // const navigate = useNavigate();

  useEffect(() => {
    axiosInstance("/tokens/refresh")
      .then(({ data }) => {
        setUser({ status: "logged", data: data.user });
        setAccessToken(data.accessToken);
      })
      .catch(() => {
        setUser({ status: "guest", data: null });
        setAccessToken("");
      });
  }, []);



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} setUser={setUser} />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
        {
          path: "/news",
          element: (
            <ProtectedRouter
              isAllowd={user.status === "logged"}
              redirect="/news"
            >
              <NewsPage user={user} />
            </ProtectedRouter>
          ),
        },
        {
          path: "/account",
          element: (
            <ProtectedRouter
              isAllowd={user.status === "logged"}
              redirect="/"
            >
              <Account user={user} />
            </ProtectedRouter>
          ),
        },
        {
          path: "/auth/signup",
          element: <SignUpPage setUser={setUser} />,
        },
        {
          path: "/auth/signin",
          element: <SignInPage setUser={setUser} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
