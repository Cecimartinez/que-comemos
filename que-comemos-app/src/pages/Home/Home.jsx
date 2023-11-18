import { useContext, useEffect } from "react";
import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { SearchBar } from "../../components/SearchBard/SearchBard";
import { CardCarrousel } from "./components/CardCarrousel/CardCarrousel";
import { Greeting } from "./components/Greeting/Greeting";
import UsuarioContext from "../../context/usuarios/usuarioContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const { id, name } = useContext(UsuarioContext)

  const navigate = useNavigate()

  useEffect(()=>{
    if(!id) navigate('/login')
  }, [])

  return (
    <div className="bg-white font-poppins flex flex-col justify-between items-baseline  h-screen">
      <Greeting userName={name} />

      <div className="w-full  flex justify-center items-center lg:mb-4 mb-10">
        <SearchBar className={"absolute top-40 lg:top-52 "} />
      </div>

      <div className="bg-white flex flex-col my-10 sm:py-5 lg:py-10 h-screen  w-full">
        <section>
          <h2 className="mx-6 lg:mb-10 lg:text-2xl text-gray-500 text-xl tracking-widest font-poppins">Recetas que podrían interesarte</h2>
        </section>

        <div className="bg-white w-full h-full flex justify-center items-center pb-10">
          <CardCarrousel />
        </div>

        <div className="flex justify-center items-center w-full bg-white">
        <ProductCard/>
        </div>

      

      </div>



      <section>
        <NavigationBottom />
      </section>
    </div>
  );
};

