import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_PATHS } from "./utils/routePaths";
import { Home } from "../Pages/Home/Home";
import { Login } from "../pages/login/login";
import { SignIn } from "../pages/SignIn/SignIn";
import { UserProfile } from "../pages/UserProfile/UserProfile";
import { SavedRecipes } from "../pages/SavedRecipes/SavedRecipes";
import { Ingredients } from "../pages/Ingredients/Ingredients";
import { Steps } from "../pages/Steps/Steps";

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route index element={<Home />} />
        <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
        <Route path={ROUTE_PATHS.SIGNIN} element={<SignIn/>} />
        <Route path={ROUTE_PATHS.USERPROFILE} element={<UserProfile/>} />
        <Route path={ROUTE_PATHS.SAVEDRECIPES} element={<SavedRecipes/>} />
        <Route path={ROUTE_PATHS.INGREDIENTS} element={<Ingredients/>} />
        <Route path={ROUTE_PATHS.STEPS} element={<Steps/>} />

        <Route path="/*" element={<Navigate to={""} />} />
      </Routes>
    </>
  );
};