
export const CardRecipes = () => {
  return (
    <div className="flex max-w-md overflow-hidden bg-white rounded-xl shadow-lg mx-5 my-3">
      <div className="w-1/3 h-full bg-cover bg-landscape">
        <img className="h-full w-full rounded-xl" src="././cookie.webp" alt="Cookie Image" />
      </div>
      <div className="w-2/3 py-8 px-5">
        <h1 className="text-lg font-medium text-neutral-900">Cookie Chips</h1>
        <p className="mt-2 text-sm text-neutral-500">
          El poco horneado hace que sean más crujientes.
        </p>
        <div className="flex justify-center items-center mt-2 gap-6 text-sm text-neutral-600">

          <div className="flex justify-center items-center ">
            <span className="mr-2 material-symbols-outlined "> timer
            </span>
            <p className=""></p> 20 min
          </div>

          <div className="flex justify-center items-center ">
            <span className="material-symbols-outlined">star
            </span>
            <p className="py-2 px-1"></p> 4.2
          </div>


          <div className="flex justify-center items-center ">
            <span className="mr-2 material-symbols-outlined"> bookmark
            </span>

          </div>

        </div>
      </div>
    </div>
  );
};

