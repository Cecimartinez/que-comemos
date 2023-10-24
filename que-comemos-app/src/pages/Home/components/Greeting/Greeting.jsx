import { Sidebar } from "../../../../components/Sidebar/Sidebar";

export const Greeting = () => {
  return (
    <div className='bg-[#B4c170] w-full h-full flex flex-col items-start justify-start rounded-b-5xl pl-6'>
      <header className="mb-10 mt-10 absolute mx-2">
        <Sidebar />

      </header>

      <div>
      </div>
      <h1 className='tracking-wide text-white mt-32 text-3xl font-medium'>
        Buenos Días
      </h1>
      <h2 className='text-white mt-3 mb-20 text-3xl font-medium tracking-wide'>
        Emma
      </h2>
    </div>
  );
};