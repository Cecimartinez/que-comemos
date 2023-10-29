import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_PATHS } from "./utils/routePaths";
import { Login } from "../pages/login/login";
import { SignIn } from "../pages/SignIn/SignIn";
import { UserProfile } from "../pages/UserProfile/UserProfile";
import { SavedRecipes } from "../pages/SavedRecipes/SavedRecipes";
import { Ingredients } from "../pages/Ingredients/Ingredients";
import { Steps } from "../pages/Steps/Steps";
import { Home } from "../pages/Home/Home";
import { RecipeSearch } from "../pages/RecipeSearch/RecipeSearch";

export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
        <Route path={ROUTE_PATHS.SIGNIN} element={<SignIn/>} />
        <Route path={ROUTE_PATHS.USERPROFILE} element={<UserProfile/>} />
        <Route path={ROUTE_PATHS.SAVEDRECIPES} element={<SavedRecipes/>} />
        <Route path={ROUTE_PATHS.INGREDIENTS} element={<Ingredients/>} />
        <Route path={ROUTE_PATHS.STEPS} element={<Steps/>} />
        <Route path={ROUTE_PATHS.RECIPESSEACRH} element={<RecipeSearch/>} />

        <Route index element={<Home/>} />

        <Route path="/*" element={<Navigate to={""} />} />
      </Routes>
    </>
  );
};