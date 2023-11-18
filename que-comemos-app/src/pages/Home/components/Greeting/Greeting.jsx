import { User2 } from "lucide-react";
import { Sidebar } from "../../../../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

export const Greeting = ({userName}) => {
  return (
    <header className='bg-[#B4c170]  w-full h-auto  flex flex-col px-7 pt-5  pb-10 items-center justify-start rounded-b-5xl'>

      <div className=" w-full flex justify-between items-center">
        <Sidebar />
        <section className=" text-center ">
          <Link to="user-profile">
            <User2 className="text-white w-8 h-8 " />
          </Link>
        </section>
      </div>

      <div className="flex flex-col w-full justify-center items-center   my-2 lg:my-8">
        <h1 className='tracking-wide text-white text-2xl lg:text-4xl  font-medium'>
          ¿Qué comemos hoy
        </h1>
        <h2 className='text-white  text-4xl font-medium tracking-wide'>
        {userName}?
        </h2>
      </div>
    </header>
  );
};