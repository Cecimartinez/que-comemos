import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_PATHS } from "./utils/routePaths";
import { Home } from "../Pages/Home/Home";
import { Login } from "../pages/login/login";

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route index element={<Home />} />
        <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />

        <Route path="/*" element={<Navigate to={""} />} />
      </Routes>
    </>
  );
};