import { User2 } from "lucide-react";
import { Sidebar } from "../../../../components/Sidebar/Sidebar";

export const Greeting = () => {
  return (
    <header className='bg-[#B4c170] mb-2 w-full h-2/3 flex flex-col px-7  items-center lg:h-1/3 justify-start rounded-b-5xl'>
      <div className=" w-full flex justify-between px-5 py-5 items-baseline">
        <Sidebar />
        <section className=" text-center ">
          <User2 className="text-white w-8 h-8 " />
        </section>
      </div>

      <div className="px-5 flex flex-col w-full justify-center items-start h-full lg:my-10 pb-10">
        <h1 className='tracking-wide text-white lg:text-6xl  text-3xl  font-medium'>
          Buenos Días
        </h1>
        <h2 className='text-white lg:text-6xl  text-3xl font-medium tracking-wide'>
          Emma
        </h2>
      </div>
    </header>
  );
};