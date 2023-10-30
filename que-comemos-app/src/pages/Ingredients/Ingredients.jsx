import { NavigationBottom } from "../../components/NavigationBottom/NavigationBottom"
import { IngredientsItems } from "./components/IngredientsItems"

export const Ingredients = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-baseline ">
      <div className="flex flex-col justify-between h-screen w-full ">
        <div className="flex w-full ">
          <img className=" w-full" src="././cookie.webp" />
        </div>
        <div className="absolute top-1/2 bg-white border h-1/2 shadow-lg border-neutral-300 rounded-t-5xl w-full">

          <section className="flex flex-col justify-center items-center py-5 gap-3">
            <p className="text-lg text-neutral-700 font-poppins my-3 font-medium">
              Galletas con chispas de chocolate
            </p>
            <div className="flex justify-center gap-7 ">
              <div className="flex justify-center items-center  ">
                <span className="mr-2 material-symbols-outlined "> timer
                </span>
                <p className="">20'</p>
                <i className="ml-7">|</i>
              </div>

              <div className="flex justify-center items-center ">
                <span className="mr-2 material-symbols-outlined">star
                </span>
                <p className=""></p> 4.2
                <i className="ml-7">|</i>

              </div>
              <div className="flex justify-center items-center ">
                <span className="mr-2 material-symbols-outlined"> bookmark
                </span>

              </div>
            </div>
            <div className="flex justify-center items-center mt-3">
              <button className="mx-3 bg-[#B4c170] text-white  py-2 w-32 rounded-2xl text-center text-lg font-medium shadow-xl border border-neutral-300 hover:bg-[#8f9b54] ">Ingredientes</button>
              <button className="mx-3 bg-[#B4c170] text-white  py-2  w-32 rounded-2xl text-center text-lg font-medium shadow-xl border border-neutral-300 hover:bg-[#8f9b54] ">Pasos</button>
            </div>
          </section>

          <div className=" w-full h-full bg-white  px-8 pt-3   ">
            <div className=" bg-white  w-full h-full border border-neutral-200 rounded-t-4xl shadow-xl  flex flex-col px-8 py-5 mb-3.5">

              <IngredientsItems img="././cookie.webp" ingredient="Azúcar Granulada" cant="100 gr." />
              <IngredientsItems img="././cookie.webp" ingredient="Azúcar Granulada" cant="100 gr." />
              <IngredientsItems img="././cookie.webp" ingredient="Azúcar Granulada" cant="100 gr." />
              <IngredientsItems img="././cookie.webp" ingredient="Azúcar Granulada" cant="100 gr." />

            </div>
          </div>
        </div>

      </div>

      <NavigationBottom />
    </div>
  )
}