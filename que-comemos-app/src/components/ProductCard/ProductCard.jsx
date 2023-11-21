export const ProductCard = () => {
  return (

    <div className="flex items-center justify-center lg:mx-10 w-full pb-16 bg-white   h-full">
      <div className="w-full p-4 b">
        <div className="flex flex-col lg:flex-col items-center  justify-center p-10 bg-white rounded-xl shadow-2xl card">
          <div className="prod-title">

              <p className="text-sm lg:text-lg text-gray-400 uppercase">
                Proximamente...
              </p>

            <p className="text-2xl lg:text-3xl font-bold text-gray-900 uppercase">
              ¿Qué comemos? <i className="text-[#B4c170] text-4xl">Plus +</i>
            </p>
            <p className="text-sm lg:text-lg text-gray-400 uppercase">
              Explorá una mejor experiencia con la versión premiun
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}