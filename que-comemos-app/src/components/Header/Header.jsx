import { Link } from "react-router-dom";

export const Header = ({page}) => {
  return (
    <div className="bg-[#B4C170] text-white w-full top-0  py-5   absolute px-4 flex items-start justify-between">
      <Link to="/" className="text-lg inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
        Home
      </Link>
      <h1 className="text-xl font-medium">{page}</h1>
    </div>
  );
};