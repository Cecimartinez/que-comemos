import { Header } from "../../components/Header/Header"
import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom"
import { SearchBar } from "../../components/SearchBard/SearchBard"

export const RecipeSearch = () => {
  return (
    <div className="bg-white font-poppins flex flex-col justify-center items-baseline min-h-screen w-full">

      <Header />
      <div className=" top-24   absolute  flex justify-center left-1/2 ">
        <SearchBar />
      </div>

      <NavigationBottom />
    </div>
  )
}