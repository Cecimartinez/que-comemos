
import { StarIcons } from "../StarIcons/StarIcons"

import useGetAleatorio from '../../../../services/recetas/useGetAleatorio'

import { useNavigate } from 'react-router-dom'

export const CardCarrousel = () => {

  const { isLoading, data } = useGetAleatorio()

  const navigate = useNavigate()
  
  const onClick = (id) => {
    navigate(`/ingredientes/${id}`)
  }

  if (isLoading || !data?.data) {
    return (
      <p>Cargando</p>
    )
  }

  return (
    <div className="carrousel-container w-full ml-2 md:px-20 h-full  bg-white  grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
      {
        data?.data?.map((receta, index) => (
          <div
            className="card-carrousel flex-col  w-11/12 sm:px-5 lg:px-5 rounded-4xl flex shadow-xl  py-5 h-80 lg:h-80 border border-neutral-100  justify-center my-4   bg-white"
            draggable="false"
            key={index}
            onClick={() => onClick(receta.id)}
          >
            <div className=" flex  justify-center h-full px-8 lg:px-10 rounded-full items-center w-full ">
              <img src={`https://quecomemos-servidor-production.up.railway.app/api/images/${receta.id}`} alt={receta.id} className=" w-full h-full rounded-3xl" />
            </div>
            <div className=" rounded-xl  flex justify-center items-start px-7  flex-col  text-gray-900">
              <h3 className="text-lg lg:text-xl tracking-wider text-neutral-500 mt-3 text-center font-medium font-poppins">
                {receta.nombre}
              </h3>

              <div className=" flex text-yellow-400  mx-1 space-x-2 ">
                {StarIcons.map((star, index) => (
                  <div className=" mt-1" key={index}>{star}</div>
                ))}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}