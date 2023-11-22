import { useContext } from "react"
import { CardRecipes } from "../../components/CardRecipes/CardRecipes"
import { Header } from "../../components/Header/Header"
import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom"
import UsuarioContext from '../../context/usuarios/usuarioContext'
export const SavedRecipes = () => {

  const { recetasGuardadas } = useContext(UsuarioContext)

  return (

    <div className="bg-white font-poppins flex flex-col justify-between items-center h-screen h-min:h:screen w-full">
      <Header page="Recetas Guardadas" />
      <div className="pb-20 mt-10 justify-center  items-center h-full grid  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">

        {
          recetasGuardadas?.map(recetaId => (
            <CardRecipes key={recetaId
            } recetaId={recetaId} isSaved={true} />
          ))
        }
      </div>

      <NavigationBottom />
    </div>
  )
}