import { Link } from 'react-router-dom';

export const NavigationItem = ({ to, icon }) => {
  return (
    <>
      <Link to={to} data-tooltip-target={`tooltip-${to}`} type="button">
        <span className={`material-symbols-outlined w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 hover:text-[#B4c170]`}>
          {icon}
        </span>
      </Link>
    </>
  );
};