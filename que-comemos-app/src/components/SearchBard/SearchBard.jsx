export const SearchBar = () => {
  return (
    <div className="absolute  ">
      <input
        type="search"
        className="input text-sm transition-all duration-500 ease-in-out bg-white shadow-xl border py-12 items-center px-20 justify-center rounded-5xl focus:ring-4 focus:ring-[#abb867] focus:bg-white"
        placeholder="Qué comemos hoy?"
      />
      <button className="text-gray-400 absolute right-4 top-2/4 transform -translate-y-2/4 px-5 py-12">
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
};