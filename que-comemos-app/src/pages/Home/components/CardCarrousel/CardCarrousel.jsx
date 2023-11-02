import { recetas } from "../../../../data/data"
import { StarIcons } from "../StarIcons/StarIcons"

export const CardCarrousel = () => {
  return (
    <div className="carrousel-container w-full  px-2 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
      {
        recetas.map((receta,index) => (
          <div
            className="card-carrousel flex-col mx-auto w-11/12 sm:px-3 rounded-4xl flex shadow-xl border-t-0 border border-neutral-200  justify-center my-4   bg-white"
            draggable="false"
            key={index} 
          >
            <a
              href={receta.link}
              target="_blank"
              rel="noopener noreferrer "
              className=""
            >
              <div className=" flex  justify-center mx-10 my-4  py-2 px-10  rounded-full items-center ">
                <img src={receta.imgSrc} alt={receta.name} className=" w-full h-full" />
              </div>
            </a>
            <div className=" rounded-xl py-12  flex justify-center items-start px-7  flex-col h-14 text-gray-900">
              <h2 className="text-lg lg:text-xl tracking-wider text-neutral-500 mt-1 text-center font-medium font-poppins">
                {receta.name}
              </h2>

              <div className=" flex text-yellow-400 my-2 mx-1 space-x-2">
                {StarIcons.map((star, index) => (
                  <div className=" " key={index}>{star}</div>
                ))}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}