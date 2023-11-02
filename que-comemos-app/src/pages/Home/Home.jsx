import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom";
import { SearchBar } from "../../components/SearchBard/SearchBard";
import { CardCarrousel } from "./components/CardCarrousel/CardCarrousel";
import { Greeting } from "./components/Greeting/Greeting";

export const Home = () => {
  return (
    <div className="bg-white font-poppins flex flex-col justify-between items-baseline  h-screen w-full md:h-full">
      <Greeting />

      <div className="w-full  flex justify-center items-center">
        <SearchBar />
      </div>
      <div className="bg-white flex flex-col my-20   lg:py-16  w-full">
        <section>
          <h2 className="mx-6 text-gray-400 text-xl tracking-widest font-poppins">Los más elegidos por nuestros Usuarios</h2>
        </section>

        <div className="bg-white w-full pb-10">
          <CardCarrousel />

        </div>

      </div>
      <section>
        <NavigationBottom />
      </section>
    </div>
  );
};

