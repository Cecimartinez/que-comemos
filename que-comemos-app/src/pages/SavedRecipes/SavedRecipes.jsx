import { CardRecipes } from "../../components/CardRecipes/CardRecipes"
import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom"
import { Link } from "react-router-dom"
export const SavedRecipes = () => {
  return (
    <div className="bg-[#fff] font-poppins flex flex-col justify-between items-baseline h-screen w-full">
      
      <div className="bg-[#B4c170] text-white w-full pt-8 pb-16 rounded-b-5xl absolute px-4  flex items-baseline justify-between">
        <Link to="/" className="text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
          </svg>
          Home
        </Link>
        <h1 className="text-lg font-medium text-center"> Recetas Guardadas</h1>
      </div>
      

      <div className="flex flex-col justify-center items-center h-full ">
        <CardRecipes/>
        <CardRecipes/>
        <CardRecipes/>

      </div>
      <NavigationBottom/>

    </div>
  )
}