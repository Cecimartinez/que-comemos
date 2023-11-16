export const ProductCard = () => {
  return (

    <div className="flex items-center justify-center lg:mx-10 w-full pb-16 bg-white   h-full">
      <div className="w-full p-4 b">
        <div className="flex flex-col lg:flex-col items-center  justify-center p-10 bg-white rounded-lg shadow-2xl card">
          <div className="prod-title">
            <p className="text-2xl lg:text-3xl font-bold text-gray-900 uppercase">
              ¿Qué comemos? <i className="text-[#B4c170] text-4xl">Plus +</i>
            </p>
            <p className="text-sm lg:text-lg text-gray-400 uppercase">
              Explorá una mejor experiencia con la versión premiun
            </p>
          </div>

          <div className="grid gap-10 prod-info">

            <div className=" items-center justify-center pt-10 text-gray-900 md:flex-row">

              <button className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-[#B4c170] rounded-full hover:bg-[#B4c170] hover:text-white focus:outline-none">
                Suscribirme              
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}