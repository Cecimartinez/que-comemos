import { Header } from "../../components/Header/Header"
import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom"
import { CardRecipes } from "../../components/CardRecipes/CardRecipes"
import useGetAllRecetas from '../../services/recetas/useGetAllRecetas'
import { useEffect, useState } from "react"

export const RecipeSearch = () => {

  const { isLoading, isError, data } = useGetAllRecetas()
  const [original, setOriginal] = useState([])
  const [lista, setLista] = useState([])
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    if (!isLoading && !isError && data?.success) {
      setLista(data?.data)
      setOriginal(data?.data)
    }
  }, [isLoading, isError, data])

  useEffect(() => {
    if (busqueda?.trim() === '') {
      setLista(original)
    } else {
      setLista(buscarRecetas(busqueda))
    }
  }, [busqueda])

  function buscarRecetas(textoBusqueda) {
    // Filtra las recetas que coinciden con el texto de búsqueda
    const resultados = original.filter((receta) => {
      // Verifica si el nombre de la receta incluye el texto de búsqueda
      const nombreCoincide = receta.nombre.toLowerCase().includes(textoBusqueda.toLowerCase());

      // Verifica si alguno de los ingredientes incluye el texto de búsqueda
      const ingredientesCoinciden = receta.ingredientes.some((ingrediente) =>
        ingrediente.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
      );

      // Devuelve true si el nombre o algún ingrediente coincide con el texto de búsqueda
      return nombreCoincide || ingredientesCoinciden;
    });

    return resultados;
  }

  return (
    <div className="bg-white font-poppins flex flex-col items-baseline min-h-screen w-full">

      <Header page="Buscar recetas" />

      <div className="w-full flex flex-row justify-center mt-4">
        <div >
          <input
            type="search"
            className="input text-lg lg:text-xl text-neutral-500 transition-all border-neutral-400 duration-500 ease-in-out bg-white shadow-xl border py-10  lg:py-12   items-center px-4 font-medium justify-center rounded-5xl focus:border-2 focus:border-[#abb867] focus:bg-white"
            placeholder="Qué comemos hoy?"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />

        </div>
      </div>

      {
        isLoading ? (
          <div className="w-full flex flex-row justify-center mt-10">
            <span className="loading loading-ring loading-md"></span>
          </div>
        ) : (
          <div className="w-full flex flex-row justify-center mt-10">
            <div className="pb-20 h-full grid  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
              {
                lista?.map(receta => {
                  const { id } = receta
                  return (
                    <CardRecipes key={id} recetaId={id} isSaved={false} />
                  )
                })
              }
            </div>
          </div>
        )
      }

      <NavigationBottom />
    </div>
  )
}