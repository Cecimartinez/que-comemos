import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom";
import { SearchBar } from "../../components/SearchBard/SearchBard";
import { CardCarrousel } from "./components/CardCarrousel/CardCarrousel";
import { Greeting } from "./components/Greeting/Greeting";

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

        <CardCarrousel/>

      </div>
      <NavigationBottom />
    </div>
  );
};

