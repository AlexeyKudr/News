import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";
import SignUpPage from "./components/pages/SignUpPage";
import SignInPage from "./components/pages/SignInPage";
import axiosInstance from "./components/api/axiosInstance";
import { setAccessToken } from "./components/api/axiosInstance";

function App() {
  const [user, setUser] = useState({ status: "guest", data: null });

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


  const logoutHandler = () => {
    axiosInstance.get('/auth/logout')
    .then(() => setUser({ status: 'guest', data: null }))
  }

  const signUpHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password || !formData.name) {
      return alert("Missing required fields");
    }
    axiosInstance.post("/auth/signup", formData).then(({ data }) => {
      setUser({ status: "logged", data: data.user });
    });
  };

  const signInHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password) {
      return alert("Missing required fields");
    }
    axiosInstance.post("/auth/signin", formData).then(({ data }) => {
      setUser({ status: "logged", data: data.user });
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} logoutHandler={logoutHandler}/>,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/auth/signup",
          element: <SignUpPage signUpHandler={signUpHandler} />,
        },
        {
          path: "/auth/signin",
          element: <SignInPage signInHandler={signInHandler} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
