import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-[#B4C170] text-white w-full top-0 pt-8 pb-16 rounded-b-5xl absolute px-4 flex items-start justify-between">
      <Link to="/" className="text-lg inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
        </svg>
        Home
      </Link>
      <h1 className="text-lg font-medium">Perfil del usuario</h1>
    </div>
  );
};