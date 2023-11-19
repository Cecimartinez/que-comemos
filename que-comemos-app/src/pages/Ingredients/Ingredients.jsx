import React, { useEffect, useState } from "react"

import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom"

import { IngredientsItems } from "./components/IngredientsItems"

import { useParams } from "react-router-dom"

import useGetById from '../../services/recetas/useGetById'

export const Ingredients = () => {

  const { id } = useParams()

  const { isLoading, isError, data } = useGetById(id)

  //const [receta, setReceta] = useState()
  const [receta, setReceta] = useState({ nombre: '', ingredientes: [], receta:'' });

  useEffect(() => {
    if (isError) {

    }
    if (!isLoading && data?.success) {
      console.log({ data })
      setReceta(data.data[0])
    }
  }, [data, isError, isLoading]);

  return (
    <div className="bg-white h-screen flex flex-col justify-center items-baseline ">
      <div className="flex flex-col justify-between h-screen w-full ">
        <div className="flex w-full ">
          <img className=" w-full" src={`https://quecomemos-servidor-production.up.railway.app/api/images/${receta.id}`} />
        </div>
        <div className="absolute top-40 sm:top-1/4 md:top-1/3 bg-white border shadow-lg border-neutral-300 rounded-t-5xl w-full h-full">

          <section className="flex flex-col justify-center items-center py-5 gap-3">
            <p className="text-neutral-700 font-poppins my-3 font-medium text-4xl">
              {receta.nombre}
            </p>
            <div className="flex justify-center gap-7 ">
              <div className="flex justify-center items-center  ">
                <span className="mr-2 material-symbols-outlined "> timer
                </span>
                <p className="">{receta.tiempoPreparacion}'</p>
                <i className="ml-7">|</i>
              </div>

              <div className="flex justify-center items-center ">
                <span className="mr-2 material-symbols-outlined">star
                </span>
                <p className=""></p> {receta.puntuacion}
                <i className="ml-7">|</i>

              </div>
              <div className="flex justify-center items-center ">
                <span className="mr-2 material-symbols-outlined"> bookmark
                </span>

              </div>
            </div>
            {/* <div className="flex justify-center items-center mt-3">
              <button className="mx-3 bg-[#B4c170] text-white  py-2 w-32 rounded-2xl text-center text-lg font-medium shadow-xl border border-neutral-300 hover:bg-[#8f9b54] ">Ingredientes</button>
              <button className="mx-3 bg-[#B4c170] text-white  py-2  w-32 rounded-2xl text-center text-lg font-medium shadow-xl border border-neutral-300 hover:bg-[#8f9b54] ">Pasos</button>
            </div> */}
          </section>

          <div className="flex flex-col justify-center items-center mb-5">
            <div className="w-80">
              {
                receta.ingredientes.map((ingrediente, index) => (
                  <IngredientsItems
                    key={index}
                    img={`https://quecomemos-servidor-production.up.railway.app/api/images/${ingrediente.id}`}
                    ingredient={ingrediente.nombre}
                    cant=""
                  />
                ))
              }
            </div>
          </div>

          <div  className="ml-10 mr-10 mb-20">
            <p className="text-gray-600 text-xl">{receta.receta}</p>
          </div>

        </div>

      </div>

      <NavigationBottom />
    </div>
  )
}