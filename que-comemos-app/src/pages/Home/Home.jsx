import { SearchBar } from "../../components/SearchBard/SearchBard";
import { Greeting } from "./components/Greeting/Greeting";

export const Home = () => {
  return (
    <div className="bg-white font-poppins flex flex-col justify-center items-baseline h-screen w-full">
      <Greeting/>
      <div className="w-full flex justify-center items-center">
        <SearchBar/>
      </div>
      <div className="bg-white px-6 py-16 my-24 w-full h-full"></div>
    </div>
  );
};

