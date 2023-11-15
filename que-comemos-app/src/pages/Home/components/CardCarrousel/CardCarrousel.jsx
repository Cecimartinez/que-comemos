import { recetas } from "../../../../data/data"
import { StarIcons } from "../StarIcons/StarIcons"

export const CardCarrousel = () => {
  return (
    <div className="carrousel-container w-full md:px-20 h-full bg-white  grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
      {
        recetas.map((receta,index) => (
          <div
            className="card-carrousel flex-col  w-11/12 sm:px-5 lg:px-5 rounded-4xl flex shadow-2xl  py-10  h-80 border border-neutral-300  justify-center my-4   bg-white"
            draggable="false"
            key={index} 
          >
            <a
              href={receta.link}
              target="_blank"
              rel="noopener noreferrer "
              className=""
            >
              <div className=" flex  justify-center mx-8   px-10 lg:px-20 rounded-full items-center ">
                <img src={receta.imgSrc} alt={receta.name} className=" w-full h-full" />
              </div>
            </a>
            <div className=" rounded-xl  flex justify-center items-start px-7  flex-col h-14 text-gray-900">
              <h2 className="text-lg lg:text-xl tracking-wider text-neutral-500 mt-1 text-center font-medium font-poppins">
                {receta.name}
              </h2>

              <div className=" flex text-yellow-400  mx-1 space-x-2">
                {StarIcons.map((star, index) => (
                  <div className=" my-4" key={index}>{star}</div>
                ))}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}