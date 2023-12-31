import { useEffect, useState, useContext } from "react"
import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom"
import { IngredientsItems } from "./components/IngredientsItems"
import { useParams } from "react-router-dom"
import useGetById from '../../services/recetas/useGetById'
import usePostGuardarReceta from '../../services/user/usePostGuardarReceta'
import UsuarioContext from "../../context/usuarios/usuarioContext"

export const Ingredients = () => {

  const { id } = useParams()

  const { id: usuarioId, recetasGuardadas, addRecetaGuardada } = useContext(UsuarioContext)

  const { isLoading, isError, data } = useGetById(id)
  const {
    isLoading: isLoadingSave,
    isError: isErrorSave,
    data: dataSave,
    callApi: callApiSave
  } = usePostGuardarReceta()

  //const [receta, setReceta] = useState()
  const [receta, setReceta] = useState({ nombre: '', ingredientes: [], receta: '' });
  const [saved, setSaved] = useState(recetasGuardadas.includes(id) || false);

  useEffect(() => {
    if (isError) {
      return "Error al Cargar Receta";
    }
    if (!isLoading && data?.success) {
      console.log({ data })
      setReceta(data.data[0])
    }
  }, [data, isError, isLoading]);

  const saveReceta = () => {
    if (!saved) {
      callApiSave({
        id: usuarioId,
        receta: id,
      })
    }
  }

  useEffect(() => {
    if (!isErrorSave && !isLoadingSave && dataSave?.success) {
      addRecetaGuardada(id)
      setSaved(true)
    }
  }, [isLoadingSave, isErrorSave, dataSave])

  return (
    <div className="bg-white h-screen flex flex-col justify-center items-baseline ">
      <div className="flex flex-col justify-between h-screen w-full ">
        <div className="flex w-full ">
          <img className=" w-full h-96 object-cover" src={`https://quecomemos-servidor-production.up.railway.app/api/images/${receta.id}`} />
        </div>
        <div className="absolute top-40 sm:top-1/4 md:top-1/3 bg-white border shadow-lg border-neutral-300 rounded-t-5xl w-full">

          <section className="flex flex-col justify-center items-center py-5 gap-3">
            <p className="text-neutral-800  text-center font-poppins my-3 font-medium text-2xl mx-5">
              {receta.nombre}
            </p>
            <div className="flex justify-center gap-7 ">
              <div className="flex justify-center items-center  ">
                <span className="mr-2 material-symbols-outlined "> timer
                </span>
                <p className="">{receta.tiempoPreparacion}</p>
                <i className="ml-7">|</i>
              </div>

              <div className="flex justify-center items-center ">
                <span className="mr-2 material-symbols-outlined">star
                </span>
                <p className=""></p> {receta.puntuacion}
                <i className="ml-7">|</i>

              </div>
              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={saveReceta}
              >
                <span className={`mr-2 material-symbols-outlined ${saved ? 'text-[#B4C170]' : ''}`}>bookmark</span>
              </div>
            </div>

          </section>

          <div className="flex flex-col justify-center items-center mb-5">
            <div className="w-80">
              <p className="text-[#9fac62] font-poppins my-3 font-medium text-2xl text-center">
                Ingredientes
              </p>
              {
                receta.ingredientes.map((ingrediente, index) => (
                  <IngredientsItems
                    key={index}
                    ingredient={ingrediente.nombre}
                    cant=""
                  />
                ))
              }
            </div>
          </div>

          <div className="ml-10 mr-10 mb-20">
            <p className="text-[#9fac62] font-poppins my-3 font-medium text-2xl text-center">
              Pasos
            </p>
            <p className="text-gray-600 text-xl">{receta.receta}</p>
          </div>
        </div>
      </div>

      <NavigationBottom />
    </div>
  )
}