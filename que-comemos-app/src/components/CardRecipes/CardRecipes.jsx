import { Link } from "react-router-dom";

export const CardRecipes = () => {
  return (
    <Link to="/ingredients">
      <div className="flex max-w-md  overflow-hidden  bg-white border border-neutral-300 rounded-xl shadow-xl mx-5 mt-4 py-4 px-4">
        <div className="w-1/3 h-full  bg-cover bg-landscape flex justify-center items-center ">
          <img className="h-full w-full  rounded-xl" src="././cookie.webp" alt="Cookie Image" />
        </div>
        <div className="w-2/3 px-5 flex flex-col justify-center items-start">
          <h1 className="text-lg font-medium text-neutral-900">Cookie Chips</h1>
          <p className="mt-1 text-sm text-neutral-500">
            El poco horneado hace que sean más crujientes.
          </p>
          <div className="flex justify-center items-center mt-4 gap-6 text-xs text-neutral-600">

            <div className="flex justify-center items-center ">
              <span className="mr-2 material-symbols-outlined "> timer
              </span>
              <p className=""></p> 20'
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
    </Link>

  );
};

