export const CardRecipes = () => {
  return (

    <div className="flex max-w-md overflow-hidden bg-white rounded-xl shadow-lg mx-5 my-3">
      <div className="w-1/3 h-full bg-cover bg-landscape ">
        <img className="h-full w-full rounded-xl" src="././cookie.webp"/>
      </div>
      <div className="w-2/3 py-10 px-5">
        <h1 className="text-lg font-bold text-neutral-900-900">
          Cookie Chips
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          El poco horneado hace que las sean
          más crujientes.
        </p>

      </div>
    </div>

  )
}