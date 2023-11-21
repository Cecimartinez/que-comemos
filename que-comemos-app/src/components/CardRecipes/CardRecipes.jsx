import { Link } from "react-router-dom";

import useGetById from '../../services/recetas/useGetById'

export const CardRecipes = ({ recetaId }) => {

  const { data } = useGetById(recetaId)

  if(!data){
    return(
      <div>
        Cargando
      </div>
    )
  }

  const { nombre, tiempoPreparacion, puntuacion } = data?.data[0]

  return (
    <Link to={`/ingredientes/${recetaId}`}>
      <div className="flex max-w-md  overflow-hidden  bg-white border border-neutral-300 rounded-xl shadow-xl my-2 mx-4 py-4 px-4">
        <div className="w-1/3 h-full  bg-cover bg-landscape flex justify-center items-center ">
          <img className="h-full w-full  rounded-xl" src={`https://quecomemos-servidor-production.up.railway.app/api/images/${recetaId}`} alt="Cookie Image" />
        </div>
        <div className="w-2/3 px-5 flex flex-col justify-center items-start">
          <h1 className="text-lg font-medium text-neutral-900">{nombre}</h1>
          {/* <p className="mt-1 text-sm text-neutral-500">
            El poco horneado hace que sean más crujientes.
          </p> */}
          <div className="flex justify-center items-center mt-4 gap-6 text-xs text-neutral-600">

            <div className="flex justify-center items-center ">
              <span className="mr-2 material-symbols-outlined "> timer
              </span>
              <p className=""></p> {tiempoPreparacion}'
            </div>

            <div className="flex justify-center items-center ">
              <span className="material-symbols-outlined">star
              </span>
              <p className="py-2 px-1"></p> {puntuacion}
            </div>
            <div className="flex justify-center items-center ">
              <span className="mr-2 material-symbols-outlined text-yellow-500"> bookmark
              </span>

            </div>

          </div>
        </div>
      </div>
    </Link>

  );
};

