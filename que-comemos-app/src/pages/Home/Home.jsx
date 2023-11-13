import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom";
import { SearchBar } from "../../components/SearchBard/SearchBard";
import { CardCarrousel } from "./components/CardCarrousel/CardCarrousel";
import { Greeting } from "./components/Greeting/Greeting";

export const Home = () => {
  return (
    <div className="bg-white font-poppins flex flex-col justify-between items-baseline  2xl:h-full  w-full md:h-full">
      <Greeting userName="Valentina" />

      <div className="w-full  flex justify-center items-center lg:mb-4 mb-10">
        <SearchBar className={"absolute top-40 lg:top-52 "} />
      </div>

      <div className="bg-white flex flex-col my-5 sm:py-5 lg:py-14  w-full">
        <section>
          <h2 className="mx-6 lg:mb-10 lg:text-2xl text-gray-500 text-xl tracking-widest font-poppins">Recetas que podrían interesarte</h2>
        </section>

        <div className="bg-white w-full flex justify-center items-center pb-10">
          <CardCarrousel />
        </div>

      </div>

      <section>
        <NavigationBottom />
      </section>
    </div>
  );
};

