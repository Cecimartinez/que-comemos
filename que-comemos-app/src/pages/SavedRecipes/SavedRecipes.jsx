import { CardRecipes } from "../../components/CardRecipes/CardRecipes"
import { Header } from "../../components/Header/Header"
import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom"

export const SavedRecipes = () => {
  return (

    <div className="bg-[#fff] font-poppins flex flex-col justify-between items-center h-screen w-full">

      <Header page="Recetas Guardadas" />

      <div className=" py-20  lg:py-36 justify-center  items-center h-full grid  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        <CardRecipes />
        <CardRecipes />
        <CardRecipes />
        <CardRecipes />
      </div>

      <NavigationBottom />
    </div>
  )
}