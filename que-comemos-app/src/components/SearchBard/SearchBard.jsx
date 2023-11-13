export const SearchBar = ({className}) => {
  return (
    <div className={className}>
      <input
        type="search"
        className="input text-lg lg:text-xl text-neutral-500 transition-all duration-500 ease-in-out bg-white shadow-xl border py-10  lg:py-12   items-center px-16 font-medium justify-center rounded-5xl focus:border-2 focus:border-[#abb867] focus:bg-white"
        placeholder="Qué comemos hoy?"
      />
      <button className="text-neutral-500 absolute right-4 top-1/2 transform -translate-y-2/4 px-3 ">
        <span className="material-symbols-outlined lg:text-3xl">search</span>
      </button>
    </div>
  );
};