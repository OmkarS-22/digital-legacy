import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import ForgotPasswordForm from "../components/ForgotPassword";
import Login from "../components/Login";
import VerifyEmail from "../components/VerifyEmail";
// import { BACKEND_URL } from "../utils/env";

// const server = BACKEND_URL;

interface RouteObject {
  name: string;
  path: string;
  element: React.ReactElement;
  isProtected: boolean;
}

const routes: RouteObject[] = [
  {
    name: "Dashboard",
    path: "/",
    element: <Dashboard />,
    isProtected: true,
  },
  {
    name: "Login",
    path: "/login",
    element: <Login />,
    isProtected: false,
  },
  {
    name: "Forgot Password",
    path: "/forgot-password",
    element: <ForgotPasswordForm />,
    isProtected: false,
  },
  {
    name: "Verify Email",
    path: "/verify-email",
    element: <VerifyEmail />,
    isProtected: false,
  },
];

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route: RouteObject, index: number) => {
          const { path, element } = route;
          return <Route key={index} path={path} element={element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
