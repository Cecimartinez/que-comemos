import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom";
import { SearchBar } from "../../components/SearchBard/SearchBard";
import { Greeting } from "./components/Greeting/Greeting";
import { recetas } from "../../data/data";
import { StarIcons } from "./components/StarIcons/StarIcons";

export const Home = () => {
  return (
    <div className="bg-white font-poppins flex flex-col justify-center items-baseline h-screen w-full">
      <Greeting />

      <div className="w-full flex justify-center items-center">
        <SearchBar />
      </div>
      <div className="bg-white px-6 py-16 mt-10 w-full h-full">
        <section>
          <h2 className="text-gray-400 text-xl tracking-widest font-poppins">Los más elegidos por nuestros Usuarios</h2>
        </section>

        <div className="carrousel-container w-full py-2 my-2 px-2 grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
          {
            recetas.map((receta) => (
              <div
                className="card-carrousel flex-col mx-auto w-11/12 sm:px-3 rounded-4xl flex shadow-lg  justify-center   bg-[#fff] "
                draggable="false"
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
                <div className=" rounded-xl py-12  flex justify-center items-start px-7  flex-col h-20 text-gray-900">
                  <h2 className="text-lg tracking-wider text-gray-500 mt-2 text-center font-medium font-poppins">
                    {receta.name}
                  </h2>

                  <div className=" flex text-yellow-400 my-5 mx-1 space-x-2">
                    {StarIcons.map((star, index) => (
                      <div className=" " key={index}>{star}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>
      <NavigationBottom />
    </div>
  );
};

