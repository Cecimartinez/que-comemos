import { User2 } from "lucide-react";
import { Sidebar } from "../../../../components/Sidebar/Sidebar";

export const Greeting = () => {
  return (
    <header className='bg-[#B4c170] w-full h-full flex flex-col items-start  gap-20 rounded-b-5xl'>
      <div className=" w-full flex justify-between px-5 py-5 items-baseline">
        <Sidebar />
        <section className=" text-center ">
          <User2 className="text-white w-8 h-8 " />
        </section>
      </div>

      <div className="px-5">
        <h1 className='tracking-wide text-white text-3xl font-medium'>
          Buenos Días
        </h1>
        <h2 className='text-white  text-3xl font-medium tracking-wide'>
          Emma
        </h2>
      </div>
    </header>
  );
};