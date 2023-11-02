import { User2 } from "lucide-react";
import { Sidebar } from "../../../../components/Sidebar/Sidebar";

export const Greeting = () => {
  return (
    <header className='bg-[#B4c170] mb-2 w-full h-screen  flex flex-col px-7 py-10 items-center lg:max-h-64 justify-start rounded-b-5xl'>

      <div className=" w-full flex justify-between items-center">
        <Sidebar />
        <section className=" text-center ">
          <User2 className="text-white w-8 h-8 " />
        </section>
      </div>

      <div className="ml-10 flex flex-col w-full justify-center items-start pb-5 my-9 lg:my-10">
        <h1 className='tracking-wide text-white text-3xl  font-medium'>
          Buenos Días
        </h1>
        <h2 className='text-white  text-3xl font-medium tracking-wide'>
          Emma
        </h2>
      </div>
    </header>
  );
};