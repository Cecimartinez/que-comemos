import { useContext } from "react"
import { CardRecipes } from "../../components/CardRecipes/CardRecipes"
import { Header } from "../../components/Header/Header"
import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom"
import UsuarioContext from '../../context/usuarios/usuarioContext'
export const SavedRecipes = () => {

  const { recetasGuardadas } = useContext(UsuarioContext)

  return (

    <div className="bg-[#fff] font-poppins flex flex-col justify-between items-center h-full h-min:h:screen w-full">

      <Header page="Recetas Guardadas" />

      <div className="pb-20 mt-10 justify-center  items-center h-full grid  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">

        {
          recetasGuardadas?.map(recetaId => (
            <CardRecipes recetaId={recetaId} isSaved={true}/>
          ))
        }
        {/* <CardRecipes />
        <CardRecipes />
        <CardRecipes />
        <CardRecipes /> */}
      </div>

      <NavigationBottom />
    </div>
  )
}