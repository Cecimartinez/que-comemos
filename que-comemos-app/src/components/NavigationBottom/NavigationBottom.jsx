import { Link } from 'react-router-dom';

export const NavigationBottom = () => {
  return (
    <div className="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        <Link to="/" data-tooltip-target="tooltip-home" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 ">

          <span className="material-symbols-outlined w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 hover:text-[#B4c170] ">
            Home
          </span>        </Link>
        <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
          Home
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <Link to="/saved-recipes" data-tooltip-target="tooltip-bookmark" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 ">
          <span className="material-symbols-outlined w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 hover:text-[#B4c170] ">
            bookmark
          </span>
        </Link>
        <div id="tooltip-bookmark" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
          Bookmark
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <Link to="/" data-tooltip-target="tooltip-search" type="button" className="inline-flex flex-col items-center justify-center p-4 hover-bg-gray-50 ">
          <span className="material-symbols-outlined w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 hover:text-[#B4c170] ">
            search
          </span>
        </Link>
        <div id="tooltip-search" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
          Search
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <Link to="/user-profile" data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 ">

          <span className="material-symbols-outlined w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 hover:text-[#B4c170] ">
            person
          </span>
        </Link>
        <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
          Settings
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
};
