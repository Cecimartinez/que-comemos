import { useContext, useEffect } from "react";
import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { CardCarrousel } from "./components/CardCarrousel/CardCarrousel";
import { Greeting } from "./components/Greeting/Greeting";
import UsuarioContext from "../../context/usuarios/usuarioContext";
import { useNavigate } from "react-router-dom";
import useGetRecetasGuardadas from '../../services/user/useGetRecetasGuardadas'

export const Home = () => {

  const { id, name, setRecetasGuardadas } = useContext(UsuarioContext)
  const { isLoading, isError, data } = useGetRecetasGuardadas(id)
  const navigate = useNavigate()

  useEffect(() => {
    if (!id) {
      navigate('/login')
    } 
  }, [])

  useEffect(() => {
    if (!isError && !isLoading && data?.success) {
      console.log(data.data.recetas)
      setRecetasGuardadas([...new Set(data.data.recetas)])
    } 
  }, [isLoading, isError, data])

  return (
    <div className="bg-white font-poppins flex flex-col justify-between items-baseline  h-screen">
      <Greeting userName={name} />

      <div className="bg-white flex flex-col my-10 sm:py-5 lg:py-10 h-screen  w-full">
        <section>
          <h2 className="mx-6 lg:mb-10 lg:text-2xl text-gray-500 text-xl tracking-widest font-poppins">Recetas que podrían interesarte</h2>
        </section>

        <div className="bg-white w-full h-full flex justify-center items-center pb-10">
          <CardCarrousel />
        </div>

        <div className="flex justify-center items-center w-full bg-white">
          <ProductCard />
        </div>
      </div>
      <section>
        <NavigationBottom />
      </section>
    </div>
  );
};

